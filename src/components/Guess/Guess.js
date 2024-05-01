import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guess({ guesses }) {
  const splitGuesses = guesses.map((guess) =>
    guess.tentativeGuess ? guess.tentativeGuess.split('') : []
  );

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((row) => (
        <p key={row} className="guess">
          {range(5).map((col) => (
            <span key={col} className="cell">
              {splitGuesses[row] && splitGuesses[row][col]
                ? splitGuesses[row][col]
                : ''}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guess;
