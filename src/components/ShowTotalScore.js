import React from 'react';
import styled from 'styled-components';

const TotalScore = styled.div`
    border: 1px solid gray;
    width: 50%;
    margin: auto;
`

const total_score = (props) => (
    <TotalScore>
        Total Score: {props.total}
    </TotalScore>
)

export default total_score;