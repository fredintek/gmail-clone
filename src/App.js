import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";
import {
  Header,
  Sidebar,
  EmailList,
  Mail,
  SendMail,
  Login,
} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { login, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

import "./App.css";

function App() {
  const selectMailOpenState = useSelector(selectMail);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />

          {/* APP BODY */}
          <div className="app__body">
            {/* SIDEBAR */}
            <Sidebar />
            <div className="app_main">
              <Routes>
                <Route path="/" element={<EmailList />} />
                <Route path="/mail" element={<Mail />} />
              </Routes>
            </div>
          </div>
          {selectMailOpenState && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
