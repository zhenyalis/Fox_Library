import React from 'react';
import styled from 'styled-components';


import { FooterYourOrdesPage } from '../../components/HomePageComponents/Footer';
import { HeaderYourOrdersPage } from '../../components/YourOrdersPageComponents/Header';
import { MainYourOrdersBooks } from '../../components/YourOrdersPageComponents/Main';

export const YourOrdersBooksPage = () => {
    return (
        <SettingsWrapper>
            <HeaderYourOrdersPage />
            <MainYourOrdersBooks />
            <FooterYourOrdesPage />
        </SettingsWrapper>
    );
};

export const SettingsWrapper = styled.div`
    position: relative;
    background: #FAFAFA;
`
