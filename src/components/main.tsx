import React, { useEffect, useState } from 'react';
import Question from './Question';
import Score from './Score';
import { Question as QuestionType } from '../interfaces';

const Main: React.FC = () => {
    const [inGame, setInGame] = useState(false);
    const [index, setIndex] = useState(0);
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [scores, setScores] = useState<(boolean | null)[]>(Array(10).fill(null));

    useEffect(() => {
        // Charger les questions depuis le fichier db.json
        fetch('/db.json')
            .then((response) => response.json())
            .then((data: QuestionType[]) => setQuestions(data))
            .catch((error) => console.error('Error loading questions:', error));
    }, []);

    if (!inGame) {
        return (
            <div className="relative h-3/4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md absolute inset-x-10 bottom-0 hover:bg-red-600 left-1/2 transform -translate-x-1/2 mb-4"
                    onClick={() => setInGame(true)}
                >
                    Get Started
                </button>
            </div>
        );
    }

    if (questions.length === 0) {
        return <div>Loading...</div>; // Afficher un message de chargement
    }

    const currentQuestion = questions[index];

    const handleAnswerClick = (isCorrectAnswer: boolean) => {
        setIsCorrect(isCorrectAnswer);

        setScores(prevScores => {
            const newScores = [...prevScores];
            newScores[index] = isCorrectAnswer;
            return newScores;
        });

        setTimeout(() => {
            if (index < questions.length - 1) {
                setIndex(index + 1);
            } else {
                setInGame(false); // Réinitialiser le jeu après la dernière question
            }
            setIsCorrect(null);
        }, 1000); // Attendre 1 seconde avant de passer à la question suivante ou de réinitialiser
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
