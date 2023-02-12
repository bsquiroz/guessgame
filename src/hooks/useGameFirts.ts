import { useAppDispatch } from "./useGuessGame";
import { showModalInstructions } from "../guessGameSlice";

const firstTimeInTheGame = localStorage.getItem("firstTimeInTheGame");

export const useGameFirts = () => {
    const dispatch = useAppDispatch();

    if (!firstTimeInTheGame) {
        (() => {
            dispatch(showModalInstructions());
            localStorage.setItem("firstTimeInTheGame", "true");
        })();
    }
};
