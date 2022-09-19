import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkAllBooks = styled(Link)`
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  background: #fafafa;
  border: none;
  color: #000000;
  &:hover {
    color: #ff5d4f;
  }
  &.active {
    color: #ff5d4f;
  }
`;
export const LinkYourOrder = styled(Link)`
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #ff5d4f;
  background: #fafafa;
  border: none;
  &:hover {
    color: #000;
  }
  &.active {
    color: #000;
  }
`;