import { changeWordInBoard, checkWord, deleteChar } from "../../guessGameSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/useGuessGame";
import { Key } from "../key";

import "./styles.css";

export const Keyboard = () => {
    const { keys } = useAppSelector((state) => state.guessGame);
    const dispatch = useAppDispatch();

    const handleKey = (key: string) => {
        if (key === "ENTER") {
            dispatch(checkWord());
            return;
        }

        if (key === "DEL") {
            dispatch(deleteChar());
            return;
        }

        dispatch(changeWordInBoard(key));
    };

    return (
        <div className="keyboard">
            {Object.entries(keys).map(([key, value]) => (
                <Key
                    key={key}
                    classname={`key ${value.status}`}
                    onclick={() => handleKey(key)}
                    text={key}
                />
            ))}
            <Key
                key={"ENTER"}
                classname={"key empty"}
                onclick={() => handleKey("ENTER")}
                text={"ENTER"}
            />
            <Key
                key={"DEL"}
                classname={"key empty"}
                onclick={() => handleKey("DEL")}
                text={"DEL"}
            />
        </div>
    );
};
