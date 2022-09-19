import React from 'react';
import styled from 'styled-components';

import oops from '../../../assets/images/not-found.jpg'


export const MainNotFound = () => {
    return (
        <div>
            <MainWrapperNotFound>
                <ErrorImages src={oops}/>
            </MainWrapperNotFound>
        </div>
    );
};

export const MainWrapperNotFound = styled.div`
    display: flex;
    width: 1230px;
    height: 461px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
`
export const ErrorImages = styled.img`
    width: 1100px;
    height: 450px;
`