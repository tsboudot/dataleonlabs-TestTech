import React from 'react';
import ScoreBox from './ScoreBox';
import { ScoreProps } from '../interfaces';

const Score = ({ scores }: ScoreProps) => {
    return (
        <div className="flex flex-wrap justify-center">
            {scores.map((isCorrect, index) => (
                <ScoreBox key={index} isCorrect={isCorrect} />
            ))}
        </div>
    );
};

export default Score;
