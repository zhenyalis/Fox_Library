import styled from "styled-components";
const StyledBtnSignUp = styled.button`
  border-radius: 8px;
  padding: 10px 130px;
  /* margin: 24px auto 40px; */
  margin-top:24px;
  background: #ff5d4f;
  font-size: 18px;
  line-height: 24.51px;
  color: #ffffff;
  border: none;
  width: 320px;
  height: 44px;
`;
export type BtnText = {
  textBtn: string;
};
export type Props = {
  data: BtnText;
};
const ModalWindowBtn = ({ data }: Props) => {
  return <StyledBtnSignUp>{data.textBtn}</StyledBtnSignUp>;
};
export default ModalWindowBtn;
