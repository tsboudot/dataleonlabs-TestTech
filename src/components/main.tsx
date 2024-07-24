import React, { useState, useEffect } from 'react';
import Score from './Score';
import Question from './Question';
import { GameState, QuestionType } from '../interfaces';

const Main = () => {
    const [gameState, setGameState] = useState<GameState>({
        inGame: false,
        index: 0,
        questions: [],
        isCorrect: null,
        scores: Array(10).fill(null),
    });

    useEffect(() => {
        fetch('/db.json')
            .then((response) => response.json())
            .then((data: QuestionType[]) => setGameState(prevState => ({
                ...prevState,
                questions: data
            })))
            .catch((error) => console.error('Error loading questions:', error));
    }, []);

    const { inGame, index, questions, isCorrect, scores } = gameState;

    if (!inGame) {
        return (
            <div className="relative h-3/4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md absolute inset-x-10 bottom-0 hover:bg-red-600 left-1/2 transform -translate-x-1/2 mb-4"
                    onClick={() => setGameState(prevState => ({
                        ...prevState,
                        inGame: true
                    }))}
                >
                    Get Started
                </button>
            </div>
        );
    }

    if (questions.length === 0) {
        return <div>Loading...</div>;
    }

    const currentQuestion = questions[index];

    const handleAnswerClick = (isCorrectAnswer: boolean) => {
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

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <Score scores={scores} />
            <Question question={currentQuestion} onAnswer={handleAnswerClick} />
            {isCorrect !== null && (
                <p className="text-xl mt-4">
                    {isCorrect ? 'Correct!' : 'Incorrect!'}
                </p>
            )}
        </div>
    );
};

export default Main;
