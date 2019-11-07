import PropTypes from 'prop-types';
import React from "react";

const PlayerComponent = ({
                             numberOfPlayer,
                             nameOfPlayer,
                             numberOfPlays,
                             isPlaying,
                             onClickButton
                        }) => {
    let btnText = !isPlaying ? "Play" : "I am playing";
    return (
        <div style={{ borderStyle: 'solid', borderWidth: 1, margin: 2 }}>
            <h2> Player {numberOfPlayer} </h2>
            <div> Name: {nameOfPlayer} </div>
            <div> Played number of times: {numberOfPlays} </div>
            <button style={{ borderStyle: 'solid', borderWidth: 1, margin: 5 }} onClick={onClickButton}> {btnText} </button>
        </div>
    );

};

PlayerComponent.propTypes = {
    numberOfPlayer: PropTypes.string,
    nameOfPlayer: PropTypes.string,
    numberOfPlays: PropTypes.number,
    isPlaying: PropTypes.bool
};

export default PlayerComponent;