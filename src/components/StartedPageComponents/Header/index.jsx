import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../../../assets/icons/logo.svg';
import { LogIn }  from '../../ModalWindow/Login_in';
import { SignUp } from '../../ModalWindow/Sign_up';
import search from '../../../assets/icons/search.svg';

const inputPlaceholderText = 'Search by author, title, name';

export const Header = () => {

    const [activeModalLogInPopup, setActiveModalLogInPopup] = React.useState(false);
    const [activeModalSignUpPopup, setActiveModalSignUpPopup] = React.useState(false);
    const ToggleModalLogInPopup = () =>
      setActiveModalLogInPopup(!activeModalLogInPopup);
    const ToggleModalSignUpPopup = () =>
      setActiveModalSignUpPopup(!activeModalSignUpPopup);

    return (
        <NavigationWrapper>
            <LogIn show={activeModalLogInPopup} close={ToggleModalLogInPopup} />
            <SignUp show={activeModalSignUpPopup} close={ToggleModalSignUpPopup} />
            <Link to="/"><LogoImages src={ logo } alt = 'logo'/></Link> 
            <InputSearch disabled  type = "text" placeholder = { inputPlaceholderText }/>
            <ButtonBlock>
                <ButtonLogin onClick={() => ToggleModalLogInPopup()}>Log in</ButtonLogin>
                <ButtonSignUp onClick={() => ToggleModalSignUpPopup()}>Sign up</ButtonSignUp>
            </ButtonBlock>
        </NavigationWrapper>
    )
}

export const LogoImages = styled.img`
    width: 172px;
    height: 32px;
`
export const NavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px auto;
    width: 1214px;
    height: 50px;
`
export const InputSearch = styled.input`
    width: 500px;
    height: 48px;
    padding: 13px 205px 13px 50px;
    font-family: 'Open Sans';
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #B5B5B5;
    border: solid 2px #FF5D4F;
    border-radius: 8px;
    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: 13px 13px;
`
export const ButtonBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 181px;
    height: 30px;
`
export const ButtonLogin = styled.button`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #616161;
    border: none;
    &:hover {
        color: #FF5D4F;
    }
    &.active {
        color: #FF5D4F;
    }
`
export const ButtonSignUp = styled.button`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: #616161;
    border: none;
    &:hover {
        color: #FF5D4F;
    }
    &.active {
        color: #FF5D4F;
    }
`