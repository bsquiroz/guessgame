export type statusTypes =
    | "includesLetter"
    | "assertedLetter"
    | "assertedNotLetter"
    | "empty";

export type typeKeys = Record<string, { status: statusTypes }>;

export interface BoardWordsInterface {
    keyValue: string;
    keyState: string;
}

export type typeBoardWord = BoardWordsInterface[][];
