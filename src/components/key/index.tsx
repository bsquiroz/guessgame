import React from "react";
import "./styles.css";

interface keyProps {
    classname: string;
    onclick: React.MouseEventHandler<HTMLDivElement> | undefined;
    text: string;
}

export const Key = ({ classname, onclick, text }: keyProps) => {
    return (
        <div className={classname} onClick={onclick}>
            <p>{text}</p>
        </div>
    );
};
