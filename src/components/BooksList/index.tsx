import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/slices/orderSlice";
import {
  BooksContainerInList,
  BooksAuthorList,
  BooksImagesList,
  BooksNameList,
  BooksRatingsList,
  ButtonStatusList,
  ContainerBooks,
} from "./style";
import { RatingStars } from "../RatingStars/RatingStars";
import { TBooks } from "../../types/types";
import { config } from "../Config/ConfigText";

export const BooksInList = (props: TBooks) => {
  const dispatch = useDispatch();

  const onClickRemove = () => {
    dispatch(removeItem(props.id));
  };
  return (
    <BooksContainerInList key={props.id}>
      <BooksImagesList src={props.imageUrl} />
      <ContainerBooks>
        <BooksNameList>{props.name}</BooksNameList>
        <BooksAuthorList>{props.author}</BooksAuthorList>
      </ContainerBooks>
      <BooksRatingsList>
        <RatingStars />
      </BooksRatingsList>
      <ButtonStatusList onClick={onClickRemove}>{config.buttons.btnReturnText}</ButtonStatusList>
    </BooksContainerInList>
  );
};
