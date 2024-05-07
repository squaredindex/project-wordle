import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ anwser, value }) {
  const letters = checkGuess(value, anwser);

  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <span
            key={num}
            className={`cell ${letters ? letters[num].status : ''}`}
          >
            {letters ? letters[num].letter : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
