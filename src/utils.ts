// utils.ts
import { GameState } from './interfaces';

export const handleAnswerClick = (
    gameState: GameState,
    setGameState: React.Dispatch<React.SetStateAction<GameState>>,
    isCorrectAnswer: boolean
) => {
    const { index, questions } = gameState;

    setGameState(prevState => {
        const newScores = [...prevState.scores];
        newScores[index] = isCorrectAnswer;

        return {
            ...prevState,
            isCorrect: isCorrectAnswer,
            scores: newScores
        };
    });

    setTimeout(() => {
        setGameState(prevState => {
            const nextIndex = prevState.index < questions.length - 1 ? prevState.index + 1 : 0;
            return {
                ...prevState,
                index: nextIndex,
                inGame: nextIndex === 0 ? false : prevState.inGame,
                isCorrect: null
            };
        });
    }, 1000);
};
