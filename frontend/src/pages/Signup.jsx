import { useState } from "react";
import { useUserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  const isLoggedIn = user !== null;

  const [userData, setUserData] = useState({
    name: "",
    username: "",
    password: "",
    password2: "",
    type: "",
  });

  const submitSignupForm = () => {
    console.log(`Submitted: ${JSON.stringify(userData)}`);
    navigate("/login")
  };

  const isValidInput = () => {
    return (
      Object.values(userData).every((value) => value !== "") &&
      userData.password === userData.password2
    );
  };

  const nameField = (
    <>
      <label htmlFor="signup-name">Name: </label>
      <input
        type="text"
        id="signup-name"
        value={userData.name}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
      />
    </>
  );

  const usernameField = (
    <>
      <label htmlFor="signup-username">Username: </label>
      <input
        type="text"
        id="signup-username"
        value={userData.username}
        onChange={(e) => setUserData({ ...userData, username: e.target.value })}
      />
    </>
  );

  const passwordField = (
    <>
      <label htmlFor="signup-password">Password: </label>
      <input
        type="password"
        id="signup-password"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
    </>
  );

  const password2Field = (
    <>
      <label htmlFor="signup-password2">Repeat password: </label>
      <input
        type="password"
        id="signup-password2"
        value={userData.password2}
        onChange={(e) =>
          setUserData({ ...userData, password2: e.target.value })
        }
      />
    </>
  );

  const typeField = (
    <>
      <label htmlFor="signup-type">Logging in as: </label>
      <select
        id="signup-type"
        value={userData.type}
        onChange={(e) => setUserData({ ...userData, type: e.target.value })}
      >
        <option value=""></option>
        <option value="learner">Learner</option>
        <option value="administrator">Administrator</option>
      </select>
    </>
  );

  const form = (
    <>
      {nameField}
      {usernameField}
      {passwordField}
      {password2Field}
      {typeField}
      {isValidInput() && (
        <button onClick={() => submitSignupForm()}>Signup</button>
      )}
    </>
  );

  const signupForm = isLoggedIn ? <p>Already logged in</p> : form;
  return <>{signupForm}</>;
};

export default Signup;
