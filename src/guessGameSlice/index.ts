import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { keys as keysData, boardWords } from "../constanst";
import { typeBoardWord, typeKeys } from "../interfaces";

export interface guessGameState {
    keys: typeKeys;
    boardWords: typeBoardWord;
    numberChecked: number;
    guessWords: string[];
    numberWord: number;
    isDarkTheme: boolean;
    modalInstructions: boolean;
}

const initialState: guessGameState = {
    keys: keysData,
    boardWords: boardWords,
    numberChecked: 0,
    guessWords: ["barco", "ramos", "finca", "romeo", "fresa"],
    numberWord: 0,
    isDarkTheme: JSON.parse(localStorage.getItem("darktheme")!) || false,
    modalInstructions: false,
};

export const guessGameSlice = createSlice({
    name: "guessgame",
    initialState,
    reducers: {
        changeWordInBoard: (state, action: PayloadAction<string>) => {
            const word = action.payload;

            const isEmpty = state.boardWords.every(
                (word) => word.every((char) => char.keyValue === "") === true
            );

            if (isEmpty) {
                state.boardWords[0][0].keyValue = word;
                state.numberChecked++;
            } else {
                let auxi: number = 0;
                let auxj: number = 0;
                let findEmpty = true;
                for (let i = 0; i < state.boardWords.length && findEmpty; i++) {
                    for (let j = 0; j < state.boardWords[i].length; j++) {
                        if (state.boardWords[i][j].keyValue === "") {
                            auxi = i;
                            auxj = j;
                            findEmpty = false;
                            state.numberChecked++;
                            break;
                        }
                    }
                }

                state.numberChecked <= 5
                    ? (state.boardWords[auxi][auxj].keyValue = word)
                    : alert("cheka haber si esta buena");
            }
        },

        checkWord: (state) => {
            const endGame = state.boardWords.every(
                (word) => word.every((char) => char.keyValue !== "") === true
            );

            if (endGame) return alert("ACABASTE EL JUEGO!!!");

            if (state.numberChecked < 5)
                return alert("Primero debes de llenar toda la fila con letras");

            const wordToGuess = state.guessWords[state.numberWord];

            state.boardWords = state.boardWords.map((word, i) => {
                return i === state.numberWord
                    ? word.map((letter, j) => {
                          return letter.keyValue ===
                              wordToGuess[j].toUpperCase()
                              ? {
                                    ...letter,
                                    keyState: "assertedLetter",
                                }
                              : wordToGuess.includes(
                                    letter.keyValue.toLowerCase()
                                )
                              ? {
                                    ...letter,
                                    keyState: "includesLetter",
                                }
                              : {
                                    ...letter,
                                    keyState: "assertedNotLetter",
                                };
                      })
                    : word;
            });

            state.numberWord++;

            state.numberChecked = 0;
        },

        deleteChar: (state) => {
            if (state.numberChecked > 0) {
                state.boardWords = state.boardWords.map((word, i) => {
                    return i === state.numberWord
                        ? word.map((letter, j) => {
                              return j === state.numberChecked - 1
                                  ? { ...letter, keyValue: "" }
                                  : letter;
                          })
                        : word;
                });

                state.numberChecked--;
            }
        },

        changeTheme: (state) => {
            state.isDarkTheme
                ? localStorage.removeItem("darktheme")
                : localStorage.setItem("darktheme", "true");

            state.isDarkTheme = !state.isDarkTheme;
        },

        showModalInstructions: (state) => {
            state.modalInstructions = true;
        },

        closeModalInstructions: (state) => {
            state.modalInstructions = false;
        },
    },
});

export const {
    changeWordInBoard,
    checkWord,
    deleteChar,
    changeTheme,
    showModalInstructions,
    closeModalInstructions,
} = guessGameSlice.actions;
export default guessGameSlice.reducer;
