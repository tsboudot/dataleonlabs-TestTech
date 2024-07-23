import React from 'react';
import ScoreBox from './ScoreBox';

interface ScoreProps {
    scores: (boolean | null)[];
}

const Score: React.FC<ScoreProps> = ({ scores }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {scores.map((isCorrect, index) => (
                <ScoreBox key={index} isCorrect={isCorrect} />
            ))}
        </div>
    );
};

export default Score;
