import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkYourOrder = styled(Link)`
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  background: #fafafa;
  border: none;
  &:hover {
    color: #ff5d4f;
  }
  &.active {
    color: #ff5d4f;
  }
`;
export const LinkAllBooks = styled(Link)`
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  background: #fafafa;
  border: none;
  color: #ff5d4f;
  &:hover {
    color: #000000;
  }
  &.active {
    color: #000000;
  }
`;