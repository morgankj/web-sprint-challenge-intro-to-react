// Write your Character component here
import React from "react";
import styled from 'styled-components';

const StyledCharacterContainer = styled.div 
`   background-color: ${pr => pr.theme.lightForestGreen};
    color: ${pr => pr.theme.cream};
    width: 10%;
    border-radius: 5%;
`

function Character({ character, open, characterId }) {
    return (
        <StyledCharacterContainer>
            <h2>{character.name}</h2>
            <button onClick={() => open(characterId)}>See details</button>
        </StyledCharacterContainer>
    )
}

export default Character;