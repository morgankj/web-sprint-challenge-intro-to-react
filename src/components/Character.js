// Write your Character component here
import React from "react";
import styled from 'styled-components';

const StyledCharacterPanel = styled.div 
`   background-color: ${pr => pr.theme.orange};
    color: ${pr => pr.theme.cream};
    width: 15%;
`

function Character({ character, open, characterId }) {
    return (
        <StyledCharacterPanel className='styledCharacterPanel'>
            <h2>{character.name}</h2>
            <button className='detailButton' onClick={() => 
                open(characterId)}>DETAILS</button>
        </StyledCharacterPanel>
    )
}

export default Character;