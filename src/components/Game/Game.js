import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import PreviousGuesses from '../PreviousGuesses';
import GuessInput from '../GuessInput';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  // To make debugging easier, we'll log the solution in the console.
console.info({ answer });
  const [guesses, setGuesses] = React.useState([]);
  return <>
    <PreviousGuesses guesses={guesses}/>
    <GuessInput setGuesses={setGuesses} answer={answer}/>
    <Banner guesses={guesses} answer={answer}/>
  </>;
}

export default Game;
