import React from 'react';
import { HeaderSettingsPage } from '../SettingsPageComponents/Header'; 
import { FooterYourOrdesPage } from '../HomePageComponents/Footer';



import { MainNotFound } from './MainNotFound';

export const NotFound = () => {
    return (
        <>
            <HeaderSettingsPage />
            <MainNotFound />
            <FooterYourOrdesPage />
        </>
    );
};

