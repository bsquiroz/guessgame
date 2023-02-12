import React from "react";
import { useAppSelector } from "../../hooks/useGuessGame";

import "./styles.css";

export const Board = () => {
    const { boardWords } = useAppSelector((state) => state.guessGame);

    return (
        <div className="board">
            {boardWords.map((word, i) => {
                return (
                    <div key={i} className="word">
                        {word.map(({ keyState, keyValue }, j) => (
                            <div key={j} className={`letter ${keyState}`}>
                                {keyValue}
                            </div>
                        ))}
                    </div>
                );
            })}
            <h3 style={{ textAlign: "center" }}>Adivina las 5 palabras</h3>
        </div>
    );
};
