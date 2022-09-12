import React, { useEffect, useState } from "react";
import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import Section from "./Section";
import EmailRow from "./EmailRow";
import "./EmailList.css";
import { db } from "../../firebase";

const EmailList = () => {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const changeSelected = (e) => {
    Array.from(document.querySelectorAll(".section")).forEach((el) => {
      el.classList.remove("section--selected");
    });

    e.target.closest(".section").classList.add("section--selected");
  };

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section
          onClick={changeSelected}
          Icon={InboxIcon}
          text="Primary"
          color="red"
          selected
        />
        <Section
          onClick={changeSelected}
          Icon={PeopleIcon}
          text="Social"
          color="#1a73e8"
        />
        <Section
          onClick={changeSelected}
          Icon={LocalOfferIcon}
          text="Promotions"
          color="green"
        />
      </div>

      <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toLocaleString("en-us", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            })}
          />
        ))}
      </div>
    </div>
  );
};

export default EmailList;
