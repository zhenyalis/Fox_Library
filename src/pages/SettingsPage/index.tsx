import React from 'react';
import styled from 'styled-components';
import { FooterYourOrdesPage } from '../../components/HomePageComponents/Footer';
import { HeaderSettingsPage } from '../../components/SettingsPageComponents/Header';
import { SettingsMainPage } from '../../components/SettingsPageComponents/Main';

export const SettingsPage = () => {
    return (
        <SettingsWrapper>
            <HeaderSettingsPage />
            <SettingsMainPage />
            <FooterYourOrdesPage />
        </SettingsWrapper>
    );
};

export const SettingsWrapper = styled.div`
    background: #FAFAFA;
`
