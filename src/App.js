import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import Character from './components/Character';
import Details from './components/Details';
import logo from './images/StarWarsLogo.png';

const StyledHeader = styled.div 
` width: 30%;
  display: flex;
  flex-direction: column;
  margin: 2% auto 0;
`

const StyledLogo = styled.img 
` width: 100%
`

const StyledCharacterListings = styled.div 
` display: flex;
  justify-content: space-evenly;
  margin: 5% auto;
  align-items: center;
`

const App = () => {
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
      <StyledHeader>
        <StyledLogo src={logo} alt=""/> 
        <h1>CHARACTERS</h1>
      </StyledHeader>
      <p className='tagline'>Click a "DETAILS" button to view information about that StarWars© character.</p> 
      <StyledCharacterListings className='characterListings'>
        {characterList.map(character => <Character character={character} key={character.url} open={openDetails} characterId={characterList.indexOf(character)} />)}
      </StyledCharacterListings>
      {currentCharacter && <Details character={currentCharacter} close={closeDetails} />}
    </div>
  );
}

export default App;
