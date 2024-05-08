import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('');

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);

    if (tentativeGuess === answer) setGameStatus('happy');

    if (
      tentativeGuess !== answer &&
      guesses.length >= NUM_OF_GUESSES_ALLOWED - 1
    ) {
      setGameStatus('sad');
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
      {gameStatus && (
        <Banner
          gameStatus={gameStatus}
          answer={answer}
          guesses={guesses}
        />
      )}
    </>
  );
}

export default Game;
