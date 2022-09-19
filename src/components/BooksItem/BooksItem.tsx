import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


import { useShowMore } from '../../hooks/useShowMore';
import { TBooks } from '../../types/types';
import { RatingStars } from '../RatingStars/RatingStars';
import { ButtonOrderGray } from '../../UX/ButtonOrderGray/ButtonOrderGray';
import { ButtonOrderRed } from '../../UX/ButtonOrderRed/ButtonOrderRed';
import { ButtonItemShowMore } from '../../UX/ButtonItemShowMore/ButtonItemShowMore';
import { ButtonItemShowLess } from '../../UX/ButtonItemShowLess/ButtonItemShowLess';
import { stringify } from 'querystring';
import { BigRatingStars } from '../BigRatingStars/BigRatingStars';

export const BooksItem = () => {
    const {id} = useParams()
    
    const {state:bookInfo}: any = useLocation()
    
    const [checkButton, setCheckButton] = React.useState(true)
    const check = checkButton ? <ButtonOrderRed  /> : <ButtonOrderGray />
    const toggleCheck = () => {
        setCheckButton(!checkButton)
    }

    const text = bookInfo?.description;
    const { slice, showMore } = useShowMore(text, 421, text?.length)
    const createText = () => ({ __html: slice})
 
    return (
        <WrapperBooksItem>
                     <BooksImage src={bookInfo.imageUrl} />
                         <BooksInfo>
                            <BigRatingStars />
                            <BooksTitle>{bookInfo.name}</BooksTitle>
                            <BooksAuthor>{bookInfo.author}</BooksAuthor>
                            <BooksData>{bookInfo.length}, released in {bookInfo.released}</BooksData>
                            <button onClick={toggleCheck}>{check}</button>
                            <BooksTitleDescription>About book</BooksTitleDescription>
                            <BooksDescription dangerouslySetInnerHTML={createText() as any}></BooksDescription>
                            {
                                text?.length === slice?.length || (
                                    <ButtonShowMore onClick={showMore}>Show more</ButtonShowMore>
                                )
                            }
                        </BooksInfo>
        </WrapperBooksItem>
    )
};

export const WrapperBooksItem = styled.div`
    display: flex;
    min-height: 647px;
    max-height: auto;
    padding: 32px;
`
export const BooksImage = styled.img`
    width: 300px;
    height: 454px;
    border: 1px solid #B5B5B5;
    border-radius: 8px;
`
export const BooksInfo = styled.div`
    margin-left: 33px;
`
export const BooksTitle = styled.h1`
    font-family: Open Sans;
    font-size: 40px;
    font-weight: 700;
    line-height: 54px;
    color: black;
    margin-top: 24px;

`
export const BooksAuthor = styled.p`
    font-family: Open Sans;
    font-size: 24px;
    font-weight: 600;
    line-height: 33px;
    color: #FF5D4F;
    margin-top: 12px;
`
export const BooksData = styled.span`
    display: block;
    font-family: Open Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    color: #616161;
    margin-top: 24px;
`
export const BooksTitleDescription = styled.h2`
    font-family: Open Sans;
    font-size: 28px;
    font-weight: 700;
    line-height: 38px;
    color: #000;
    margin-top: 59px;
`
export const BooksDescription = styled.p`
    display: block;
    width: 789px;
    height: auto;
    font-family: Open Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #000;
    margin-top: 16px;
`
export const ButtonShowMore = styled.button`
font-family: Open Sans;
font-size: 12px;
font-weight: 600;
line-height: 16px;
color:#fff;
border-radius: 8px;
background: #B5B5B5;
margin-top: 16px;
padding: 6.9px 23.5px;

`