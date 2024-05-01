import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Guess from '../Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    const newGuess = {
      tentativeGuess,
      id: crypto.randomUUID(),
    };

    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);
  }

  return (
    <>
      <Guess guesses={guesses} />
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
