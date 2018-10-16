import React from 'react';
import styled from 'styled-components';

const EndButton = styled.button`
    height: 40px;
    width: 80px;
    background-color: gray;
`

const End = (props) => {
    return (
        <EndButton onClick={() => props.onClick}>
            END GAME
        </EndButton>
    );
}

export default End;