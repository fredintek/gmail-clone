import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux/es/exports";
import { closeSendMessage } from "../../features/mailSlice";
import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { db } from "../../firebase";
import firebase from "firebase/compat/app";

import { REGEX_EMAIL_VALIDATION } from "../../utils/mylib";
import "./SendMail.css";

const SendMail = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const nowSubmit = (data) => {
    console.log(data);
    db.collection("emails").add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  const closeComposeBox = () => {
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <IconButton onClick={closeComposeBox}>
          <CloseIcon className="sendMail__close" />
        </IconButton>
      </div>

      <form onSubmit={handleSubmit(nowSubmit)}>
        <input
          {...register("to", {
            required: true,
            pattern: REGEX_EMAIL_VALIDATION,
          })}
          placeholder="To :"
          type="email"
        />
        {errors.to && (
          <span className="error__msg">Should be a valid email address</span>
        )}
        <input
          {...register("subject", { required: true })}
          placeholder="Subject :"
          type="text"
        />
        {errors.subject && (
          <span className="error__msg">Subject is required</span>
        )}
        <input
          {...register("message", { required: true })}
          type="text"
          className="sendMail__message"
        />
        {errors.message && (
          <span className="error__msg">Message is required</span>
        )}
        <div className="sendMail__button">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
