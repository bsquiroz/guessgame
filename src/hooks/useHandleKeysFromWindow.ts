import { useEffect } from "react";
import { useAppDispatch } from "./useGuessGame";

import { changeWordInBoard, checkWord, deleteChar } from "../guessGameSlice";

const keySuccess = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Ñ",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
];

function useWindow(eventName: keyof WindowEventMap, callback: any) {
    useEffect(() => {
        window.addEventListener(eventName, callback);

        return () => {
            window.removeEventListener(eventName, callback);
        };
    });
}

export const useHandleKeysFromWindow = () => {
    useWindow("keydown", handleKeyDown);

    const dispatch = useAppDispatch();

    function handleKeyDown(event: KeyboardEvent) {
        const key = event.key.toUpperCase();

        if (key === "ENTER") {
            dispatch(checkWord());
            return;
        }

        if (key === "BACKSPACE") {
            dispatch(deleteChar());
            return;
        }

        if (keySuccess.includes(key)) {
            dispatch(changeWordInBoard(key));
            return;
        }
    }
};
