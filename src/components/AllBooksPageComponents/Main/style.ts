import styled from 'styled-components';
export const BooksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    max-width: 1230px;
`
export const MainWrapper = styled.div`
    width: 1230px;
    height: auto;
    margin: 40px auto;
`
export const AllBooksBlock = styled.div`
    width: 1230px;
    min-height: 421px;
    background:${(props) => props.theme.colors["white"]};
    border-radius: 16px;
`
export const TitleAllBooksBlock = styled.h2`
    padding: 26px 1076px 0px 32px;
    font-family: 'Open sans';
    font-size: ${(props) => props.theme.fonts["secondary"]};
    font-weight: 700;
    line-height: 27px;
    color:${(props) => props.theme.colors["black"]};
`
export const ButtonShowMore = styled.button`
    margin: 36px 522.5px 26px 522.5px;
    padding: 10.5px 38px;
    font-family: Open Sans;
    font-size: ${(props) => props.theme.fonts["secondary"]};
    font-weight: 600;
    line-height: 27px;
    color: ${(props) => props.theme.colors["white"]};
    background:${(props) => props.theme.colors["generalRed"]};
    border-radius: 8px;
`