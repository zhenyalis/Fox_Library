import React from "react";
import debounce from "lodash.debounce";
import { Link } from "react-router-dom";
import { SearchContext } from "../../../App";
import {
  LogoImages,
  NavigationWrapper,
  InputSearchHomePage,
  ButtonBlock,
  BlockUser,
  USerImages,
  
} from "../../Header/StyledComponents/StyledComponents";
import { LinkAllBooks, LinkYourOrder } from "../../Header/Links/LinksYourOrder";
import logo from "../../../assets/icons/logo.svg";
import { AccountManagementPage } from "../../AccountManagementPage/index";
import { ButtonOpenPopup } from "../../../UX/ButtonOpenPopup/ButtonOpenPopup";
import { ButtonClosedPopup } from "../../../UX/ButtonClosedPopup/ButtonClosedPopup";
import { UserAuth } from "../../Context/AuthContext";
const inputPlaceholderText = "Search by author, title, name";

export const HeaderYourOrdersPage = () => {
  const { user } = UserAuth();
  console.log(user);
  const [value, setValue] = React.useState("");
  const [activeUserMenu, setActiveUserMenu] = React.useState(false);
  const checkPopup = activeUserMenu ? (
    <ButtonClosedPopup />
  ) : (
    <ButtonOpenPopup />
  );
  const ToggleUserMenuPopup = () => setActiveUserMenu(!activeUserMenu);
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 250),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <NavigationWrapper>
      <Link to="/all-books">
        <LogoImages src={logo} alt="logo" />
      </Link>
      <InputSearchHomePage
        ref={inputRef}
        type="text"
        placeholder={inputPlaceholderText}
        value={value}
        onChange={onChangeInput}
        onClick={onClickClear}
      />
      <ButtonBlock>
        <button>
          <LinkAllBooks to="/all-books">All books</LinkAllBooks>
        </button>
        <button>
          <LinkYourOrder to="/your-orders">Your orders</LinkYourOrder>
        </button>
      </ButtonBlock>
      <BlockUser>
        <USerImages src={user.photoURL} alt="avatar" />
        <button onClick={() => ToggleUserMenuPopup()}>{checkPopup}</button>
        <AccountManagementPage
          open={activeUserMenu}
          close={ToggleUserMenuPopup}
        />
      </BlockUser>
    </NavigationWrapper>
  );
};
