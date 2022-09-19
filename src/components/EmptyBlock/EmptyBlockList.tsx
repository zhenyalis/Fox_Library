import React from 'react';
import styled from 'styled-components'

export const EmptyBlockList = () => {
    return (
        <Wrapper>
            <EmptyDescritionBlockList>Oops! You haven't added any book yet</EmptyDescritionBlockList>
        </Wrapper>
    );
};
 

export const Wrapper = styled.div`
    margin: 133px auto;
`
export const EmptyDescritionBlockList = styled.h2`
    text-align: center;
    font-family: Open Sans;
    font-size: 24px;
    font-weight: 600;
    line-height: 33px;
    color: #B5B5B5;
`