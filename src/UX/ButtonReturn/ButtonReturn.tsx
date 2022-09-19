import React from 'react';
import styled from 'styled-components';

export const ButtonReturn = () => {
    return (
        <BtnReturn>
            Return
        </BtnReturn>
    );
};

export const BtnReturn = styled.button`
    padding: 6.9px 23.5px;
    border-radius: 8px;
    margin-top: 10px;       
    font-family: Open Sans;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    text-shadow: 0 0 2px rgba(255, 255, 255, 1);
    background-clip: padding-box;
    color: #fff;
    background: #B5B5B5;
    -webkit-box-shadow: inset 0 1px rgba(255, 255, 255, 0.09), 0 1px 1px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 1px rgba(255, 255, 255, 0.09), 0px 1px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2ms;
    &:hover {
        background-color: #aaaaaa;
    }
    &:active {
        background: white;
        color: black;
        border-color: #1c1c1c #202020 #222;
        -webkit-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.9), 0 1px rgba(255, 255, 255, 0.02);
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.09);
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.09);
    }
`