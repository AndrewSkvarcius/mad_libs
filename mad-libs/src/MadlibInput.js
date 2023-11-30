import React from 'react';

const MadlibInput = ({ name, label, onChange }) => {
    return (
        <div>
            <label htmlFor={name}>{label}: </label>
            <input type="text" name={name} onChange={onChange} />
        </div>
    );
};

export default MadlibInput;