import styled from "styled-components";
// import ModalWindowInput from "./WindowInput";
import ModalWindowBtn from "./BtnModalWindow/WindowBtn";
import imgBagBtnClose from "../../assets/icons/close.svg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
const StyledWindowLogIn = styled.form`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* transform: translate(50% 50%); */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background-color: rgba(181, 181, 181, 0.8);
`;
const StyledWindowWrapperLogIn = styled.div`
  display: flex;
  transform: translate(100%, 20%);
  position: absolute;
  top: 8%;
  left: 13%;
  flex-direction: column;
  width: 417px;
  height: 369px;
  padding: 40px 0 40px 32px;
  border-radius: 8px;
  background: #fff;
`;
const StyledWindowTitle = styled.p`
  font-size: 24px;
  line-height: 32.68px;
  font-weight: 700;
`;
const StyledDescriptionInput = styled.label`
  font-size: 16px;
  line-height: 21.79px;
  color: #616161;
  margin-bottom: 4px;
  margin-top: 15px;
`;

const StyledBtnCloseModalWindow = styled.button`
  background-image: url(${imgBagBtnClose});
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const StyledInput = styled.input`
  width: 320px;
  height: 44px;
  padding: 9px 0 10px 16px;
  border-radius: 8px;
  font-size: 18px;
  border: 1px solid #b5b5b5;
  line-height: 24.51px;
`;

export const LogIn = ({ show, close }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/all-books");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <>
      {show ? (
        <StyledWindowLogIn onClick={() => close()} onSubmit={handleSubmit}>
          <StyledWindowWrapperLogIn onClick={(e) => e.stopPropagation()}>
            <StyledBtnCloseModalWindow
              onClick={() => close()}
            ></StyledBtnCloseModalWindow>
            <StyledWindowTitle>Log In to Fox Library</StyledWindowTitle>
            <StyledDescriptionInput>email</StyledDescriptionInput>
            <StyledInput
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            ></StyledInput>
            <StyledDescriptionInput>password</StyledDescriptionInput>
            <StyledInput
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            ></StyledInput>
            <ModalWindowBtn
              data={{
                textBtn: "Log In",
              }}
            ></ModalWindowBtn>
          </StyledWindowWrapperLogIn>
        </StyledWindowLogIn>
      ) : null}
    </>
  );
};
