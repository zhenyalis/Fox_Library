import styled from "styled-components";
import search from "../../../assets/icons/search.svg";

export const LogoImages = styled.img`
  width: 172px;
  height: 32px;
`;
export const USerImages = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 8px;
`;
export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px auto 80px;
  width: 1214px;
  height: 50px;
  background: #fafafa;
`;
export const InputSearchHomePage = styled.input`
  width: 500px;
  height: 48px;
  padding: 13px 205px 13px 50px;
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #b5b5b5;
  border: solid 2px #b5b5b5;
  border-radius: 8px;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 13px 13px;
`;
export const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 181px;
  height: 30px;
`;
export const BlockUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 69px;
  height: auto;
`;
