import React, { useState } from 'react';
import Form from './Form/Form';
// import Banner from './Banner/Banner';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '~/src/constants.js';
import { checkGuess } from '~/src/game-helpers.js';

// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [updateCount, setUpdateCount ] = useState(0);
  const [answer, setAnswer] = useState(sample(WORDS));

  const gridData = [
    range(0, 5, 1, ''),
    range(0, 5, 1, ''),
    range(0, 5, 1, ''),
    range(0, 5, 1, ''),
    range(0, 5, 1, '')
  ];

  const [grid, setGrid] = useState(gridData);

  const updateList = (newValue) => {
    const result = checkGuess(newValue, answer);

    setGrid(gridData => {

      const newGridData = [...gridData];

      newGridData[updateCount] = result

      return newGridData;

    });
    setUpdateCount((value) => value + 1);
    setAnswer(sample(WORDS));
  }


  return (
    <div>
      <div className='guess-results'>
        {grid.map((row) => {
          return (
            <p className='guess' key={crypto.randomUUID()}>
              {row.map(({letter, status}, index) => {
                return (<span className={`cell ${status}`} key={index}>{letter}</span>)
              })}
            </p>
          )
        })}
      </div>
      <Form updateList={updateList} remaining={NUM_OF_GUESSES_ALLOWED - updateCount}/>
    </div>
  )
}

export default Game;
