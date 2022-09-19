import React from 'react';
import styled from 'styled-components';

export const ButtonOrderGray = () => {
    return (
        <BtnOrder disabled>
            Order
        </BtnOrder>
    );
};

export const BtnOrder = styled.button`
    padding: 9.9px 64px;
    border-radius: 8px;
    margin-top: 10px;       
    font-family: Open Sans;
    font-size: 20px;
    font-weight: 600;
    line-height: 27px;
    color: #fff;
    background: #B5B5B5;

`