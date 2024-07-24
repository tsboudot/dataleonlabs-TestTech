import React from 'react';
import { ScoreBoxProps } from '../interfaces';

const ScoreBox = ({ isCorrect }: ScoreBoxProps) => {
    let bgColor = 'bg-gray-300';

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
