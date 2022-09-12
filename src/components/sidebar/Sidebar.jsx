import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { openSendMessage } from "../../features/mailSlice";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SidebarOptions from "./SidebarOptions";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import SnoozeIcon from "@mui/icons-material/Snooze";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import "./Sidebar.css";

const Sidebar = () => {
  const dispatch = useDispatch();
  const openComposeBox = () => {
    dispatch(openSendMessage());
  };

  return (
    <div className="sidebar">
      <Button
        className="sidebar__button"
        startIcon={<AddIcon fontSize="large" />}
        onClick={openComposeBox}
      >
        Compose
      </Button>

      <div className="sidebar__options">
        <SidebarOptions Icon={InboxIcon} text="Inbox" color="gray" num="54" />
        <SidebarOptions Icon={StarIcon} text="Starred" color="gray" />
        <SidebarOptions Icon={SnoozeIcon} text="Snoozed" color="gray" />
        <SidebarOptions
          Icon={LabelImportantIcon}
          text="Important"
          color="gray"
        />
        <SidebarOptions Icon={SendIcon} text="Sent" color="gray" />
        <SidebarOptions Icon={DraftsIcon} text="Drafts" color="gray" num="54" />
        <SidebarOptions Icon={ExpandMoreIcon} text="More" color="gray" />
      </div>

      <div className="sidebar__footer">
        <IconButton>
          <PersonIcon />
        </IconButton>
        <IconButton>
          <DuoIcon />
        </IconButton>
        <IconButton>
          <PhoneIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
