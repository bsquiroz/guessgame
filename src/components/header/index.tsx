import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/useGuessGame";

import { changeTheme, showModalInstructions } from "../../guessGameSlice";

import "./styles.css";

export const Header = () => {
    const { isDarkTheme } = useAppSelector((state) => state.guessGame);
    const dispatch = useAppDispatch();

    if (isDarkTheme) {
        document.querySelector("body")?.classList.add("darktheme");
    } else {
        document.querySelector("body")?.classList.remove("darktheme");
    }

    return (
        <div className="header">
            <div
                className="box__question"
                onClick={() => dispatch(showModalInstructions())}
            >
                <img
                    src={isDarkTheme ? "question.png" : "questionDay.png"}
                    alt="questions"
                />
            </div>

            <h2>WORDLE</h2>

            <div className="header__group">
                <div className="box__statistics">
                    <img
                        src={
                            isDarkTheme ? "statistics.png" : "statisticsDay.png"
                        }
                        alt="statistics"
                    />
                </div>
                <div
                    className={`${
                        isDarkTheme
                            ? "box__changeTheme themeNight"
                            : "box__changeTheme themeDay"
                    } `}
                >
                    <div
                        className={`${
                            isDarkTheme ? "ball ballNight" : "ball ballDay"
                        } `}
                        onClick={() => dispatch(changeTheme())}
                    ></div>
                </div>
            </div>
        </div>
    );
};
