import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Banner({guesses, answer}) {
  const gameIsWon = guesses.find(guess => guess.every(letter => letter.status === 'correct'));
  const gameIsOver = guesses.length >= NUM_OF_GUESSES_ALLOWED || gameIsWon; 

  const classNameWrapper = gameIsWon ? 'happy' : 'sad';
  
  return gameIsOver ? (<div className={`${classNameWrapper} banner`}>
  {gameIsWon ? 
  (<p>
    <strong>Congratulations!</strong> Got it in
    <strong> {guesses.length} guesses</strong>.
  </p>) : 
  (<p>Sorry, the correct answer is <strong>{answer}</strong>.</p>)}
</div>) : null;
}

export default Banner;
