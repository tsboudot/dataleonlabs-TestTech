import React, { useState, useEffect } from 'react';
import Score from './Score';
import Question from './Question';
import { GameState, QuestionType } from '../interfaces';
import { handleAnswerClick } from '../utils';

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
            <div className="relative h-3/4 mt-20">
                <button
                    className="bg-blue-500 text-white px-4 py-2 mt-20 rounded-md inset-x-10 bottom-0 hover:bg-red-600 left-1/2 transform -translate-x-1/2 mb-4"
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

    const handleClick = (isCorrectAnswer: boolean) => {
        handleAnswerClick(gameState, setGameState, isCorrectAnswer);
    };

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <Score scores={scores} />
            <Question question={currentQuestion} onAnswer={handleClick} />
            {isCorrect !== null && (
                <p className="text-xl mt-4">
                    {isCorrect ? 'Good Choice!' : 'Damn!'}
                </p>
            )}
        </div>
    );
};

export default Main;
