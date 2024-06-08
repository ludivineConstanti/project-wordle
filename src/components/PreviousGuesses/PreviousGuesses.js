import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function PreviousGuesses({guesses}) {
  return <div className="guess-results">
  {range(NUM_OF_GUESSES_ALLOWED).map((guessIndex) => 
    <Guess key={guessIndex} value={guesses[guessIndex]}/>
    )}
</div>;
}

export default PreviousGuesses;
