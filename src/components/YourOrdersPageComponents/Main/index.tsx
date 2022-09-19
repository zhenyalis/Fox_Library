import React from 'react';
import styled from 'styled-components';
import { BooksItem } from '../../BooksItem/BooksItem';


export const MainYourOrdersBooks = () => {
    return (
        <MainWrapper>
            <YourOrdersBlock>
               <BooksItem   />
            </YourOrdersBlock> 
        </MainWrapper>
    );
};

export const MainWrapper = styled.div`
    width: 1230px;
    height: auto;
    margin: 40px auto;
`
export const YourOrdersBlock = styled.div`
    width: 1230px;
    height: auto;
    margin: 0px auto 80px;
    background: #fff;
    border-radius: 16px;
`