import React, { useState } from 'react';
import MadlibInput from './MadlibInput';

const MadlibForm = ({ onStoryUpdate }) => {
    const [inputs, setInputs] = useState({
        noun: '',
        verb: '',
        adjective: '',
        // ... more fields
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({...inputs, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const story = `Once there was a ${inputs.adjective} ${inputs.noun} who loved to ${inputs.verb}.`;
        onStoryUpdate(story);
    };

    return (
        <form onSubmit={handleSubmit}>
            <MadlibInput name="noun" label="Noun" onChange={handleChange} />
            <MadlibInput name="verb" label="Verb" onChange={handleChange} />
            <MadlibInput name="adjective" label="Adjective" onChange={handleChange} />
            {/* Add more inputs here */}
            <button type="submit">Create Story</button>
        </form>
    );
};

export default MadlibForm;
