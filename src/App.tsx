import React from "react";
import { Board, Container, Header, Instructions, Keyboard } from "./components";
import { useGameFirts } from "./hooks/useGameFirts";
import { useHandleKeysFromWindow } from "./hooks/useHandleKeysFromWindow";

export const App = () => {
    useGameFirts();
    useHandleKeysFromWindow();

    return (
        <Container>
            <Header />
            <Board />
            <Keyboard />
            <Instructions />
        </Container>
    );
};
