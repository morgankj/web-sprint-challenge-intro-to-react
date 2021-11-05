import React from 'react';
import styled from 'styled-components';

const StyledDetailPanel = styled.div 
`   display: flex;
    flex-direction: column;
    color: ${pr => pr.theme.cream};
    width: 50%;
    margin: 0 auto 10%;
`

const Details = ({ character, close }) => {
    return (
        <StyledDetailPanel className='styledDetailPanel'>
            <h2 className='detail'>{character.name}'s Details</h2>
            <p>Birth year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
            <p>Eye Color: {character.eye_color}</p>
            <button onClick={close}>CLOSE</button>
        </StyledDetailPanel>
    )
}

export default Details;