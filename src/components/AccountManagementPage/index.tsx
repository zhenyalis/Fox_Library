import { Link } from "react-router-dom";
import line from "../../assets/icons/line.svg";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import {
  UserName,
  PopupManagement,
  ButtonLogOut,
  LineImage,
  LinksManagement,
  BlockManagement,
} from "./style";
import { config } from "../Config/ConfigText";
export const AccountManagementPage = ({ open, close }: any) => {
  const { user, logout } = UserAuth();
  console.log(user);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      alert("You are logged out");
    } catch (e) {
      // console.log(e.message);
    }
  };
  return (
    <>
      {open && (
        <PopupManagement onClick={() => close()}>
          <UserName> {user && user.displayName}</UserName>
          <BlockManagement>
            <Link to="/settings">
              
              <LinksManagement>{config.links.navLinkSettingsText}</LinksManagement>
            </Link>
            <LineImage src={line} />
            <Link to="/your-orders">
              <LinksManagement>{config.links.navLinkOrdersText}</LinksManagement>
            </Link>
          </BlockManagement>
          <ButtonLogOut onClick={handleLogout}>{config.buttons.btnLogOutText}</ButtonLogOut>
        </PopupManagement>
      )}
    </>
  );
};
