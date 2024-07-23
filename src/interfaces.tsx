export interface Answer {
    0: string;
    1: boolean;
}

export interface Question {
    id: number;
    photo: string;
    answers: Answer[];
}
