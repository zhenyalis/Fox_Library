import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { addItems } from '../../redux/slices/orderSlice';
import { TBooks } from '../../types/types';

export const ButtonOrderRed = () => {
    // const [booksStatus, setBooksStatus] = React.useState(false)

    // const dispatch = useDispatch();     
    // const addedProduct = useSelector((state: any) => state.order.items.find((obj: any) => obj.id === props.id))

    // const onClickAdd = () => {
    //     const item = {
    //         id: props.id,
    //         name:props.name,
    //         imageUrl:props.imageUrl,
    //         author:props.author,
    //         status:booksStatus,
    //     }
    //     console.log(item)
    //     dispatch(addItems(item))
    // }

    // onClick={onClickAdd}

    return (
        <BtnOrder >
            Order
        </BtnOrder>
    );
};

export const BtnOrder = styled.button`
    padding: 9.9px 64px;
    border-radius: 8px;
    margin-top: 10px;       
    font-family: Open Sans;
    font-size: 20px;
    font-weight: 600;
    line-height: 27px;
    color: #fff;
    background: #FF5D4F;
`