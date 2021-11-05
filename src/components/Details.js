import React from 'react';
import styled from 'styled-components';

const Details = ({ character, close }) => {
    return (
        console.log(character),
        <div className='container'>
            <h2>Details:</h2>
            <p>{character.birth_year}</p>
            <p>{character.gender}</p>
            <button onClick={close}>Close</button>
        </div>
    )
}

export default Details;