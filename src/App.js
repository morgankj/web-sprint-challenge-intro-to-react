import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character';
import Details from './components/Details';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out the state properties here.
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should sync up with, if any.
  const [characterList, setCharacterList] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState(null);

  const openDetails = characterId => {
    setCurrentCharacter(characterList[characterId]);
  }

  const closeDetails = () => {
    setCurrentCharacter(null);
  }

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        setCharacterList(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characterList.map(character => <Character character={character} key={character.url} open={openDetails} characterId={characterList.indexOf(character)} />)}
      {currentCharacter && <Details character={currentCharacter} close={closeDetails} />}
    </div>
  );
}

export default App;
