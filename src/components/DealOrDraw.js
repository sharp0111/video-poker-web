import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
    border: 1px solid gray;
`

const DealOrDraw = () => {
    return (
        <div>
            <Button>DEAL</Button>
            <Button>DRAW</Button>
        </div>
    );
}

export default DealOrDraw;