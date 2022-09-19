import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { TBooks } from '../../types/types';
import { RatingStars } from '../RatingStars/RatingStars';
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from '../../redux/slices/orderSlice';

import { ButtonAvailable } from '../../UX/ButtonAvailable/ButtonAvailable';
import { ButtonTaken } from '../../UX/ButttonTaken/ButtonTaken';

export const BooksBlock = (props: TBooks) => {

    const dispatch = useDispatch(); 
    const addedProduct = useSelector((state: any) => state.order.items.find((obj: any) => obj.id === props.id))

    const [booksStatus, setBooksStatus] = React.useState(false)
    const status = booksStatus ? <ButtonTaken/> : <ButtonAvailable />
    const toggleStatus = () => {
       setBooksStatus(!booksStatus)
    }

    const onClickAdd = () => {
        const item = {
            id: props.id,
            name:props.name,
            imageUrl:props.imageUrl,
            author:props.author,
            status:booksStatus,
        }
        
        dispatch(addItems(item))
    }

    return (
        <WrapperBooks key={props.id}>
            <Link to={`/all-books/${props.id}`} state={props}><BooksImages src={props.imageUrl}/></Link>
            <BoolksInfo>
                <button onClick={toggleStatus}>{status}</button>
                <Link to={`/all-books/${props.id}`} state={props}><BooksName>{props.name}</BooksName></Link> 
                <AuthorNameBooks>{props.author}</AuthorNameBooks>
                <BooksRatings ><RatingStars /></BooksRatings>
                <ButtonOrder onClick={onClickAdd}>Order</ButtonOrder>
            </BoolksInfo>
        </WrapperBooks>
    );
};

export const BoolksInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 122px;
    margin-left: 12px;
    background: #FFF;
`
export const WrapperBooks = styled.div`
    display: flex;
    min-width: 256px;
    height: 185px;
    margin-left: 32px;
    margin-top: 48px;
    flex-grow: 1;
`
export const BooksImages = styled.img`
    width: 122px;
    height: 185px;
    border: 1px solid #B5B5B5;
    border-radius: 8px;
    cursor: pointer;
`
export const BooksName = styled.p`
    max-height: 19px;
    margin-top: 30px;
    margin-bottom: 25px;
    font-family: Open Sans;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    color: #000000;
    overflow: hidden;
`
export const BooksRatings = styled.span`  
    margin-top: 8px;
`
export const ButtonOrder = styled.button`
    margin-top: 8px;
    padding: 7px 23px 7px 24px;
    font-family: Open Sans;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    color:#fff;
    background: #B5B5B5;
    border-radius: 8px;
    -webkit-box-shadow: inset 0 1px rgba(255, 255, 255, 0.09), 0 1px 1px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 1px rgba(255, 255, 255, 0.09), 0px 1px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2ms;
    &:hover {
        background-color: #aaaaaa;
    }
    &:active {
        background: white;
        color: black;
        border-color: #1c1c1c #202020 #222;
        -webkit-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.9), 0 1px rgba(255, 255, 255, 0.02);
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.09);
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.09);
    }
`
export const AuthorNameBooks = styled.span`
    font-family: Open Sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: #616161;
`
