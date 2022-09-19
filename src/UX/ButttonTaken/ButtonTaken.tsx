import React from 'react';
import styled from 'styled-components';

export const ButtonTaken = () => {
    return (
        <TakenBtn>
            Taken
        </TakenBtn>
    );
};

export const TakenBtn = styled.button`
    padding: 5px 32px;
    font-family: Open Sans;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    color: #000;
    border: 2px solid #FF5D4F;
    border-radius: 24px;
`