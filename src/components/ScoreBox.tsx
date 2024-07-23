import React from 'react';

interface ScoreBoxProps {
    isCorrect: boolean | null; // null before the question is answered
}

const ScoreBox: React.FC<ScoreBoxProps> = ({ isCorrect }) => {
    let bgColor = 'bg-gray-300'; // Default color

    if (isCorrect === true) {
        bgColor = 'bg-green-500';
    } else if (isCorrect === false) {
        bgColor = 'bg-red-500';
    }

    return (
        <div className={`w-8 h-8 ${bgColor} m-1 rounded-md`}></div>
    );
};

export default ScoreBox;
