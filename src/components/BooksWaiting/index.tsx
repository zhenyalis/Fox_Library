// import React from 'react';
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/slices/orderSlice";
import {
  BooksContainerInWaiting,
  BooksAuthorWaiting,
  BooksImagesWaiting,
  BooksNameWaiting,
  BooksRatingsWaiting,
  ButtonStatusWaiting,
  ContainerBooks,
} from "./style";
// import { ButtonTaken } from '../../UX/ButttonTaken/ButtonTaken';
// import { ButtonAvailable } from '../../UX/ButtonAvailable/ButtonAvailable';
import { RatingStars } from "../RatingStars/RatingStars";
import { TBooks } from "../../types/types";
import { config } from "../Config/ConfigText";

export const BooksInWaiting = (props: TBooks) => {
  const dispatch = useDispatch();

  const onClickRemove = () => {
    dispatch(removeItem(props.id));
  };

  return (
    <BooksContainerInWaiting key={props.id}>
      <BooksImagesWaiting src={props.imageUrl} />
      <ContainerBooks>
        <BooksNameWaiting>{props.name}</BooksNameWaiting>
        <BooksAuthorWaiting>{props.author}</BooksAuthorWaiting>
      </ContainerBooks>
      <BooksRatingsWaiting>
        <RatingStars />
      </BooksRatingsWaiting>
      <ButtonStatusWaiting onClick={onClickRemove}>{config.buttons.btnReturnText}</ButtonStatusWaiting>
    </BooksContainerInWaiting>
  );
};
