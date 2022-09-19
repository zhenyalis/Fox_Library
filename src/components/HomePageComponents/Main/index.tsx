import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { BooksInWaiting } from '../../BooksWaiting';
import { EmptyBlockBooks } from '../../EmptyBlock/EmptyBlockBooks';
import { EmptyBlockList } from '../../EmptyBlock/EmptyBlockList';
import { TBooks } from '../../../types/types';
import { BooksInList } from '../../BooksList';

export const MainYourOrdesPage = (props: TBooks) => {
    const dispatch = useDispatch(); 
    const items: any = useSelector((state: any) => state.order.items);
    const checkStatusTrue = items.filter((item: any) => item.status === true)
    const checkStatusFalse = items.filter((item: any) => item.status === false)

    return ( 
        <MainWrapper>
            <WaitingBlock>
                <TitleWaitingBlock>Waiting for</TitleWaitingBlock>
                <BlockItems>
                { checkStatusTrue.length ?  
                    checkStatusTrue.map((item: any) => <BooksInWaiting key={item.id} {... item} />) : <EmptyBlockBooks />
                }
                </BlockItems>
               
            </WaitingBlock>
            <ListBooks>
                <TitleListBooks>List of your books</TitleListBooks>
                <BlockItems>
                { checkStatusFalse.length ?  
                    checkStatusFalse.map((item: any) => <BooksInList key={item.id} {... item} />) : <EmptyBlockList />
                }
                </BlockItems>
            </ListBooks>
        </MainWrapper>
    );
};

export const MainWrapper = styled.div`
    width: 1230px;
    height: auto;
    margin: 40px auto;
`
export const WaitingBlock = styled.div`
    width: 1230px;
    height: 401px;
    margin: 40px auto;
    background: #fff;
    border-radius: 16px;
`
export const ListBooks = styled.div`
    width: 1230px;
    height: 401px;
    margin: 0 auto;
    background: #ffff;
    border-radius: 16px;
`
export const TitleWaitingBlock = styled.h2`
    padding: 26px 1076px 20px 32px;
    font-family: 'Open sans';
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    color: #000000;
`
export const TitleListBooks = styled.h2`
    padding: 26px 1018px 20px 32px;
    font-family: 'Open sans';
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    color: #000000;
`
export const BlockItems = styled.div`
    display: flex;

`