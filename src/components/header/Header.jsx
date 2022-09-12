import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Avatar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

import "./Header.css";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutNow = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://cdn.vox-cdn.com/thumbor/g_nyLm8AT_WA7a79K-EhRZV0sE0=/0x0:1320x880/920x613/filters:focal(555x335:765x545):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67587450/newgmaillogo.0.jpg"
          alt=""
        />
      </div>
      <div className="header__middle">
        <SearchIcon className="header__searchIcon" />
        <input placeholder="Search mail" type="search" />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton onClick={logoutNow}>
          <Avatar src={user.photoUrl} />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
