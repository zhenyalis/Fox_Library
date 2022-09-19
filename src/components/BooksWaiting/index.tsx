import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../redux/slices/orderSlice';

import { ButtonTaken } from '../../UX/ButttonTaken/ButtonTaken';
import { ButtonAvailable } from '../../UX/ButtonAvailable/ButtonAvailable';
import { RatingStars } from '../RatingStars/RatingStars';
import { TBooks } from '../../types/types';

export const BooksInWaiting = ( props: TBooks ) => {
    const dispatch = useDispatch();

    const onClickRemove = () => {
        dispatch(removeItem(props.id))
    }
    
    return (
        <BooksContainerInWaiting key={props.id}>
            <BooksImagesWaiting src={props.imageUrl}/>
            <ContainerBooks>
                <BooksNameWaiting>{props.name}</BooksNameWaiting>
                <BooksAuthorWaiting>{props.author}</BooksAuthorWaiting>
            </ContainerBooks>
            <BooksRatingsWaiting><RatingStars /></BooksRatingsWaiting>
            <ButtonStatusWaiting onClick={onClickRemove}>Ruturn</ButtonStatusWaiting>
        </BooksContainerInWaiting>
    );
};

export const BooksContainerInWaiting = styled.div`
    display: flex;
    width: 122px;
    height: 308px;
    flex-direction: column;
    margin-left: 32px;
`
export const BooksAuthorWaiting = styled.p`
    font-family: Open Sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: #000;
`
export const BooksImagesWaiting = styled.img`
    width: 122px;
    height: 185px;
    border-radius: 8px;
`
export const BooksNameWaiting = styled.p`
    font-family: Open Sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: #000;
`
export const BooksRatingsWaiting = styled.span`  
    display: flex;
    width: 19px;
    height: 19px;
    margin-top: 8px;
    border-radius: 1px;
`
export const ButtonStatusWaiting = styled.button`
    margin-top: 8px;
    padding: 7px 23px 7px 24px;
    font-family: Open Sans;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    color:#fff;
    background: #B5B5B5;
    border-radius: 8px;
`
export const ContainerBooks = styled.div`
    margin-top: 8px;;
    height: 48px;
`