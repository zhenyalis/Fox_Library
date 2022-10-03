import styled from 'styled-components';

export const BooksContainerInList = styled.div`
    display: flex;
    width: 122px;
    height: 308px;
    flex-direction: column;
    margin-left: 32px;
`
export const BooksAuthorList = styled.p`
    font-family: Open Sans;
    font-size: ${(props) => props.theme.fonts["ensuing"]};
    font-weight: 400;
    line-height: 16px;
    color:  ${(props) => props.theme.colors["black"]};
`
export const BooksImagesList = styled.img`
    width: 122px;
    height: 185px;
    border-radius: 8px;
`
export const BooksNameList = styled.p`
    font-family: Open Sans;
    font-size: ${(props) => props.theme.fonts["ensuing"]};
    font-weight: 400;
    line-height: 16px;
    color: ${(props) => props.theme.colors["black"]};
`
export const BooksRatingsList = styled.span`  
    display: flex;
    width: 19px;
    height: 19px;
    margin-top: 8px;
    border-radius: 1px;
`
export const ButtonStatusList = styled.button`
    margin-top: 8px;
    padding: 7px 23px 7px 24px;
    font-family: Open Sans;
    font-size: ${(props) => props.theme.fonts["ensuing"]};
    font-weight: 600;
    line-height: 16px;
    color:${(props) => props.theme.colors["white"]};
    background: ${(props) => props.theme.colors["secondaryGrey"]};
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
export const ContainerBooks = styled.div`
    margin-top: 8px;;
    height: 48px;
`