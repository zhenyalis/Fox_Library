import React from 'react';
import styled from 'styled-components'

export const EmptyBlockBooks = () => {
    return (
        <Wrapper>
            <EmptyDescritionBlockBooks>Oops! You are not waiting for any book </EmptyDescritionBlockBooks>
        </Wrapper>
    );
};
 

export const Wrapper = styled.div`
    margin: 133px auto;
`
export const EmptyDescritionBlockBooks = styled.h2`
    text-align: center;
    font-family: Open Sans;
    font-size: 24px;
    font-weight: 600;
    line-height: 33px;
    color: #B5B5B5;
`
