export interface Answer {
    0: string;
    1: boolean;
}

export interface QuestionType {
    id: number;
    photo: string;
    answers: Answer[];
}

export interface GameState {
    inGame: boolean;
    index: number;
    questions: QuestionType[];
    isCorrect: boolean | null;
    scores: (boolean | null)[];
}

export interface QuestionProps {
    question: QuestionType;
    onAnswer: (isCorrect: boolean) => void;
}

export interface ScoreProps {
    scores: (boolean | null)[];
}

export interface ScoreBoxProps {
    isCorrect: boolean | null;
}
