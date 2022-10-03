import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useShowMore } from "../../hooks/useShowMore";
import {
  WrapperBooksItem,
  BooksImage,
  BooksInfo,
  BooksTitle,
  BooksAuthor,
  BooksData,
  BooksTitleDescription,
  BooksDescription,
  ButtonShowMore,
} from "./style";
// import { TBooks } from '../../types/types';
// import { RatingStars } from '../RatingStars/RatingStars';
import { ButtonOrderGray } from "../../UX/ButtonOrderGray/ButtonOrderGray";
import { ButtonOrderRed } from "../../UX/ButtonOrderRed/ButtonOrderRed";
// import { ButtonItemShowMore } from '../../UX/ButtonItemShowMore/ButtonItemShowMore';
// import { ButtonItemShowLess } from '../../UX/ButtonItemShowLess/ButtonItemShowLess';
// import { stringify } from 'querystring';
import { BigRatingStars } from "../BigRatingStars/BigRatingStars";
import { config } from "../Config/ConfigText";

export const BooksItem = () => {
  const { id } = useParams();

  const { state: bookInfo }: any = useLocation();

  const [checkButton, setCheckButton] = React.useState(true);
  const check = checkButton ? <ButtonOrderRed /> : <ButtonOrderGray />;
  const toggleCheck = () => {
    setCheckButton(!checkButton);
  };

  const text = bookInfo?.description;
  const { slice, showMore } = useShowMore(text, 421, text?.length);
  const createText = () => ({ __html: slice });

  return (
    <WrapperBooksItem>
      <BooksImage src={bookInfo.imageUrl} />
      <BooksInfo>
        <BigRatingStars />
        <BooksTitle>{bookInfo.name}</BooksTitle>
        <BooksAuthor>{bookInfo.author}</BooksAuthor>
        <BooksData>
          {bookInfo.length}, released in {bookInfo.released}
        </BooksData>
        <button onClick={toggleCheck}>{check}</button>
        <BooksTitleDescription>{config.heading.descriptionBookText}</BooksTitleDescription>
        <BooksDescription
          dangerouslySetInnerHTML={createText() as any}
        ></BooksDescription>
        {text?.length === slice?.length || (
          <ButtonShowMore onClick={showMore}>{config.buttons.btnShowText}</ButtonShowMore>
        )}
      </BooksInfo>
    </WrapperBooksItem>
  );
};
