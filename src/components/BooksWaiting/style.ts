import styled from 'styled-components';

export const BooksContainerInWaiting = styled.div`
    display: flex;
    width: 122px;
    height: 308px;
    flex-direction: column;
    margin-left: 32px;
`
export const BooksAuthorWaiting = styled.p`
    font-family: Open Sans;
    font-size: ${(props) => props.theme.fonts["ensuing"]};
    font-weight: 400;
    line-height: 16px;
    color: ${(props) => props.theme.colors["black"]};
`
export const BooksImagesWaiting = styled.img`
    width: 122px;
    height: 185px;
    border-radius: 8px;
`
export const BooksNameWaiting = styled.p`
    font-family: Open Sans;
    font-size: ${(props) => props.theme.fonts["ensuing"]};
    font-weight: 400;
    line-height: 16px;
    color: ${(props) => props.theme.colors["black"]};
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
    font-size: ${(props) => props.theme.fonts["ensuing"]};
    font-weight: 600;
    line-height: 16px;
    color:${(props) => props.theme.colors["white"]};
    background:${(props) => props.theme.colors["secondaryGrey"]};
    border-radius: 8px;
`
export const ContainerBooks = styled.div`
    margin-top: 8px;;
    height: 48px;
`