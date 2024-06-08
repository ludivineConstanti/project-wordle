import React from 'react';
import { checkGuess } from '../../game-helpers.js';

function GuessInput({setGuesses, answer}) {
  const [inputValue, setInputValue] = React.useState('');

  return (
  <form className="guess-input-wrapper" 
    onSubmit={(e) => {
      e.preventDefault()
      setGuesses((prevGuesses) => [...prevGuesses, checkGuess(inputValue, answer)]);
      setInputValue('');
      }}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input 
      id="guess-input" 
      type="text" 
      value={inputValue} 
      pattern="[a-zA-Z]{5}"
      maxLength={5}
      title="5 letter word"
      required
      onChange={(e) => {
        setInputValue(e.target.value.toUpperCase());
      }}/>
  </form>);
}

export default GuessInput;
