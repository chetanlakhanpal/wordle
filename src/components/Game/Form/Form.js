import React, { useState } from 'react';

const Form = ({updateList, remaining}) => {

    const [input, setInput] = useState('');

    const CHAR_LIMIT = 5;

    const onSubmit = (e) => {
        e.preventDefault();

        if (input.length < 5) {
            return;
        }
        updateList(input);
        
        setInput('');
    }

    return (
        <div>
            <form  onSubmit={(e) => onSubmit(e)} className='guess-input-wrapper'>
            <label htmlFor='guess-input'>Enter guess: </label>
            <input id="guess-input" type='text'
                disabled={remaining === 0}
                minLength={CHAR_LIMIT}
                maxLength={CHAR_LIMIT}
                value={input}
                onChange={e => setInput(e.target.value.toUpperCase())}/>
            </form>
        </div>
    );
};

export default Form;