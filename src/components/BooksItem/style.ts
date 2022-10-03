import styled from 'styled-components';

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
    font-size: ${(props) => props.theme.fonts["rare"]};
    font-weight: 700;
    line-height: 54px;
    color: ${(props) => props.theme.colors["black"]};
    margin-top: 24px;

`
export const BooksAuthor = styled.p`
    font-family: Open Sans;
    font-size: ${(props) => props.theme.fonts["side"]};
    font-weight: 600;
    line-height: 33px;
    color: ${(props) => props.theme.colors["generalRed"]};
    margin-top: 12px;
`
export const BooksData = styled.span`
    display: block;
    font-family: Open Sans;
    font-size:  ${(props) => props.theme.fonts["average"]};
    font-weight: 400;
    line-height: 25px;
    color:${(props) => props.theme.colors["gray"]};
    margin-top: 24px;
`
export const BooksTitleDescription = styled.h2`
    font-family: Open Sans;
    font-size: 28px;
    font-weight: 700;
    line-height: 38px;
    color:${(props) => props.theme.colors["black"]};
    margin-top: 59px;
`
export const BooksDescription = styled.p`
    display: block;
    width: 789px;
    height: auto;
    font-family: Open Sans;
    font-size:  ${(props) => props.theme.fonts["primary"]};
    font-weight: 400;
    line-height: 22px;
    color:${(props) => props.theme.colors["black"]};
    margin-top: 16px;
`
export const ButtonShowMore = styled.button`
font-family: Open Sans;
font-size: ${(props) => props.theme.fonts["ensuing"]};
font-weight: 600;
line-height: 16px;
color:${(props) => props.theme.colors["white"]};
border-radius: 8px;
background: ${(props) => props.theme.colors["secondaryGrey"]};
margin-top: 16px;
padding: 6.9px 23.5px;

`