import React from 'react';

function Banner({ gameStatus, answer, guesses }) {
  const className = gameStatus ? `${gameStatus} banner` : 'banner';
  return (
    <div className={className}>
      {gameStatus === 'happy' && (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guesses.length} guesses</strong>.
        </p>
      )}

      {gameStatus === 'sad' && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
