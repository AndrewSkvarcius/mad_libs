import React, { useState } from 'react';
import MadlibForm from './MadlibForm';
import MadlibStory from './MadlibStory';

const MadlibGame = () => {
    const [story, setStory] = useState(null);

    const handleStoryUpdate = (storyData) => {
        setStory(storyData);
    };

    const restartGame = () => {
        setStory(null);
    };

    return (
        <div>
            {!story ? (
                <MadlibForm onStoryUpdate={handleStoryUpdate} />
            ) : (
                <MadlibStory story={story} onRestart={restartGame} />
            )}
        </div>
    );
};

export default MadlibGame;