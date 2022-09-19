import React from 'react';
import styled from 'styled-components';
import menu_up from '../../assets/icons/menu_up.svg';

export const ButtonClosedPopup = () => {
    return (
        <BtnClosed>
        <img src={menu_up}/>
        </BtnClosed>
    );
};

export const BtnClosed = styled.button`
`