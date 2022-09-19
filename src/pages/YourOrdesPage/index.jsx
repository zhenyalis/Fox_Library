import React from 'react';
import styled from 'styled-components';


import { FooterYourOrdesPage } from '../../components/HomePageComponents/Footer';
import { HeaderYourOrdesPage } from '../../components/HomePageComponents/Header';
import { MainYourOrdesPage } from '../../components/HomePageComponents/Main';
import { TBooks } from '../../types/types';

export const YourOrdesPage = ({searchValue, setSearchValue}, props) => {

    return (
        <Wrapper>
            <HeaderYourOrdesPage />
            <MainYourOrdesPage id={props.id} name={props.name} author={props.author} length={props.length} released={props.released} description={props.description} imageUrl={props.imageUrl}  />
            <FooterYourOrdesPage />
        </Wrapper>
    );
};

export const Wrapper = styled.div`
    background: #FAFAFA;
`
