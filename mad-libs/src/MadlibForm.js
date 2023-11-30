import React, { useState } from 'react';
import MadlibInput from './MadlibInput';
import "./MadlibForm.css";

const MadlibForm = ({ onStoryUpdate }) => {
    const [inputs, setInputs] = useState({
        noun: '',
        noun2: '',
        verb: '',
        adjective: '',
        color: '',
   
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({...inputs, [name]: value});
    };

    const allInputs = Object.values(inputs).every(input => input.trim() !== '');

    const handleSubmit = (e) => {
        e.preventDefault();
    if(allInputs){
        const story = `Once there was a ${inputs.color} ${inputs.noun} who loved a to see a ${inputs.adjective}  ${inputs.noun2} ${inputs.verb}.`;
        onStoryUpdate(story);
    }
    };

    return (
        <div>
            <h1 className="madlib-form-h1">MABLIBS</h1>
        <form onSubmit={handleSubmit} className="madlib-form">
            <MadlibInput name="noun" label="Noun" onChange={handleChange} />
            <MadlibInput name="noun2" label="Noun2" onChange={handleChange} />
            <MadlibInput name="verb" label="Verb" onChange={handleChange} />
            <MadlibInput name="adjective" label="Adjective" onChange={handleChange} />
            <MadlibInput name="color" label="color" onChange={handleChange} />
            <button type="submit" disabled={!allInputs}>Create Story</button>
        </form>
        </div>
    );
        
        
}; 

export default MadlibForm;
