import { AnyListenerPredicate } from "@reduxjs/toolkit/dist/listenerMiddleware/types";
import { AnyAsyncThunk } from "@reduxjs/toolkit/dist/matchers";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { UserAuth } from "../../Context/AuthContext";

export const SettingsMainPage = () => {
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
  );
  const { user, upload } = UserAuth();
  const auth = getAuth();

  function handleChange(e: any) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }
  function handleClick() {
    upload(photo, user);
  }
  useEffect(() => {
    if (user?.photoURL) {
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  const triggerResetEmail = async () => {
    console.log(email);
    await sendPasswordResetEmail(auth, email);
    alert("Password reset email sent");
  };

  return (
    <SettingsMain>
      <SettingsContainer>
        <SettingsTitle>Settings</SettingsTitle>
        <SettingsPhotoImg src={user.photoURL} alt="avatar"></SettingsPhotoImg>
        <ChangePhotoButton onClick={handleClick}>
          Change photo
        </ChangePhotoButton>
        <SettingsInput type="file" onChange={handleChange} />
        <SettingsForm>
          <SettingsLabelName></SettingsLabelName>
          <SettingsInput value={user && user.displayName} />
          <SettingsLabelName>Birthdate</SettingsLabelName>
          <SettingsInput type="date" />
          <SettingsLabelName>Email</SettingsLabelName>
          <SettingsInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <SettingsLabelName>Password</SettingsLabelName>
          <SettingsInput type="password" />
          <SettingsLabelName>New password</SettingsLabelName>
          <SettingsInput type="password" />
        </SettingsForm>
        <SettingsSaveButton onClick={triggerResetEmail}>
          Save
        </SettingsSaveButton>
      </SettingsContainer>
    </SettingsMain>
  );
};

export const SettingsMain = styled.div`
  background: #fafafa;
`;

export const SettingsTitle = styled.h1`
  padding: 26px 157px 40px 156px;
  font-family: Open Sans;
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  color: #000000;
`;
export const SettingsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 394px;
  height: 730px;
  margin: 80px auto 40px;
  background: #fff;
  border-radius: 8px;
`;
export const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin: 0 auto;
`;
export const SettingsLabelName = styled.label`
  padding-top: 15px;
  padding-bottom: 4px;
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  color: #000000;
`;
export const SettingsInput = styled.input`
  width: 320px;
  align-items: center;
  padding: 7px 19px;
  border: solid 1px #b5b5b5;
  border-radius: 8px;
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  color: #000000;
`;
export const ChangePhotoButton = styled.button`
  margin: 16px auto 10px;
  padding: 7px 19px;
  border-radius: 8px;
  background: #b5b5b5;
  font-family: Open Sans;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: #ffffff;
`;
export const SettingsSaveButton = styled.button`
  margin: 20px auto 21px;
  padding: 5px 43px 9px 44px;
  border-radius: 8px;
  background: #ff5d4f;
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  color: #fff;
`;
export const SettingsPhotoImg = styled.img`
  width: 81px;
  height: 81px;
  border-radius: 100px;
`;
