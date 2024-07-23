import React from 'react';
import { Question as QuestionType } from './../interfaces';

interface QuestionProps {
    question: QuestionType;
    onAnswer: (isCorrect: boolean) => void;
}

const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <img src={question.photo} alt="Question" className="mb-6" />
            <p className="text-xl mb-6">Who is this?</p>
            <div className="flex space-x-4">
                {question.answers.map((answer, idx) => (
                    <button
                        key={idx}
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                        onClick={() => onAnswer(answer[1])}
                    >
                        {answer[0]}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;