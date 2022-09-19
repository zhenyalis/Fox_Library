import React from 'react';
import styled from 'styled-components';
import menu_down from '../../assets/icons/menu_down.svg';


export const ButtonOpenPopup = () => {
    return (
        <BtnOpen >
          <img src={menu_down}/>
        </BtnOpen>
    );
};

export const BtnOpen = styled.button`
   
`
