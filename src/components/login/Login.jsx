import { Button } from "@mui/material";
import React from "react";
import { auth, provider } from "../../firebase";
import { useDispatch } from "react-redux/es/exports";
import { login } from "../../features/userSlice";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const loginNow = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.LPcuqRqM7mAaCGCzGo6qTQHaEK&pid=Api&P=0"
          alt=""
        />
        <Button
          onClick={loginNow}
          variant="contained"
          className="login__button"
          color="primary"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
