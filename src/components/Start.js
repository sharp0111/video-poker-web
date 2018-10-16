import React from 'react';
import styled from 'styled-components';

const StartButton = styled.button`
    height: 40px;
    width: 80px;
    background-color: gray;
`

const Start = (props) => {
    return (
        <StartButton onClick={() => props.onClick}>
            START GAME
        </StartButton>
    );
}

export default Start;