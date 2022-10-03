import { useState ,useContext,useEffect} from "react";

import {
  BooksContainer,
  MainWrapper,
  AllBooksBlock,
  TitleAllBooksBlock,
  ButtonShowMore,
} from "./style";

import { TBooks } from "../../../types/types";
import { BooksBlock } from "../../BooksBlock";
import { Skeleton } from "../../Skeleton/Skeleton";
import { SearchContext } from "../../../App";

export const MainAllBooksPage = () => {
  const { searchValue, setSearchValue }: any = useContext(SearchContext);
  const [items, setItems] = useState<TBooks[]>([]);
  const [isLoading, setIsLoading] =useState(true);
  const [noOfElement, setnoOfElement] = useState(4);

  const slice = items.slice(0, noOfElement);
  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("https://fox-library-api.herokuapp.com/api/library")
      .then((res) => res.json())
      .then((arr: TBooks[]) => {
        const books = arr.filter((obj) => {
          if (
            obj.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            obj.author.toLocaleLowerCase().includes(searchValue.toLowerCase())
          ) {
            {
              return true;
            }
            return false;
          }
        });
        setItems(books);
        setIsLoading(false);
      });
  }, [searchValue]);

  const books = slice.map((obj) => <BooksBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <MainWrapper>
      <AllBooksBlock>
        <TitleAllBooksBlock>All books</TitleAllBooksBlock>
        <BooksContainer>{isLoading ? skeletons : books}</BooksContainer>
        <ButtonShowMore onClick={() => loadMore()}>Show more</ButtonShowMore>
      </AllBooksBlock>
    </MainWrapper>
  );
};
