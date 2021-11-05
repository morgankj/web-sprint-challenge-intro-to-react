// Write your Character component here
import React from "react";

function Character(props) {
    return (
        <h2>{props.character.name}</h2>
    )
}

export default Character;