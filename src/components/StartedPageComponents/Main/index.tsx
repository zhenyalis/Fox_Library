import  StartPage  from '../../../assets/images/start_page.png'
import styled from 'styled-components';
import React from 'react';

import { LogIn } from '../../ModalWindow/Login_in';

export const Main = () => {

    const [activeModalLogInPopup, setActiveModalLogInPopup] = React.useState(false);
    const ToggleModalLogInPopup = () =>
      setActiveModalLogInPopup(!activeModalLogInPopup);

    return (
        <WraperContainer>
            <StartBlock>
                <LogIn show={activeModalLogInPopup} close={ToggleModalLogInPopup} />
                <Title>Bild your library</Title>
                <Subtitle>Over 400.000 books from fiction to the business literature</Subtitle>
                <ButtonStart onClick={ToggleModalLogInPopup}>Let’s start</ButtonStart>
            </StartBlock>
            <div>
                <StartedImages src = {StartPage} alt = 'start page'/>
            </div>
        </WraperContainer>
    )
}

export const WraperContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 34px auto 265px;
    width: 1240px;
    height: 494px;
    background: #D3EBF9;
    border-radius: 8px;
`
export const StartBlock = styled.div`
    width: auto;
    height: 294px;
    margin: 100px 117px 100px 80px;
`
export const Title = styled.h2`
    margin-bottom: 40px;
    font-family: 'Open Sans';
    font-size: 38px;
    font-weight: 700;
    line-height: 52px;
    color: #000000;
`
export const Subtitle = styled.p`
    width: 314px;
    margin-bottom: 40px;
    font-family: 'Open Sans';
    font-size: 28px;
    font-weight: 600;
    line-height: 38px;
    color: #000000;
`
export const ButtonStart = styled.button`
    padding: 11px 45px 10px 45px;
    font-family: 'Open Sans';
    font-size: 20px;
    font-weight: 600;
    line-height: 27px;
    color: #ffffff;
    background: #FF5D4F;
    border-radius: 8px;
`
export const StartedImages = styled.img`
    margin-right: 95px;
`