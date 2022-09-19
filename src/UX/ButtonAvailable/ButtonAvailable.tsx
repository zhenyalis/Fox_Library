import React from 'react';
import styled from 'styled-components';


export const ButtonAvailable = () => {
    return (
        <AvailableBtn>
            Available
        </AvailableBtn>
    );
};

export const AvailableBtn = styled.button`
    padding: 5px 23.5px;
    font-family: Open Sans;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    color: #000;
    border: 2px solid #85C8EE;
    border-radius: 24px;
`