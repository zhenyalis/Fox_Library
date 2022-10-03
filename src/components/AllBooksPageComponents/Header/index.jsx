import debounce from "lodash.debounce";
import { Link } from "react-router-dom";
import { SearchContext } from "../../../App";
import { config } from "../../Config/ConfigText";
import { useState ,useContext,useRef,useCallback} from "react";
import {
  LogoImages,
  NavigationWrapper,
  InputSearchHomePage,
  ButtonBlock,
  BlockUser,
  USerImages,
} from "../../Header/StyledComponents/StyledComponents";
import { UserAuth } from "../../Context/AuthContext";
import { LinkAllBooks, LinkYourOrder } from "../../Header/Links/LinksAllBooks";
import logo from "../../../assets/icons/logo.svg";
import { AccountManagementPage } from "../../AccountManagementPage/index";
import { ButtonOpenPopup } from "../../../UX/ButtonOpenPopup/ButtonOpenPopup";
import { ButtonClosedPopup } from "../../../UX/ButtonClosedPopup/ButtonClosedPopup";
const inputPlaceholderText = "Search by author, title, name";

export const HeaderAllBooksPage = () => {
  const { user } = UserAuth();
  const [value, setValue] = useState("");
  const [activeUserMenu, setActiveUserMenu] = useState(false);
  const checkPopup = activeUserMenu ? (
    <ButtonClosedPopup />
  ) : (
    <ButtonOpenPopup />
  );
  const ToggleUserMenuPopup = () => setActiveUserMenu(!activeUserMenu);
  const { setSearchValue } = useContext(SearchContext);

  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
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
          <LinkAllBooks to="/all-books">
            {config.links.navLinkBooksText}
          </LinkAllBooks>
        </button>
        <button>
          <LinkYourOrder to="/your-orders">
            {config.links.navLinkYourOrdersText}
          </LinkYourOrder>
        </button>
      </ButtonBlock>
      <BlockUser>
        <USerImages src={user.photoURL} />
        <button onClick={() => ToggleUserMenuPopup()}>{checkPopup}</button>
        <AccountManagementPage
          open={activeUserMenu}
          close={ToggleUserMenuPopup}
        />
      </BlockUser>
    </NavigationWrapper>
  );
};
