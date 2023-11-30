import React from 'react';
import "./MadlibStory.css";

const MadlibStory = ({ story, onRestart }) => {
    return (
        <div className="madlib-story">
            <p>{story}</p>
            <button onClick={onRestart}>Restart</button>
        </div>
    );
};

export default MadlibStory;