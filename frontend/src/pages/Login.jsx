import { useState } from "react";
import { useUserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user } = useUserContext();
  const isLoggedIn = user !== null;
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    password: "",
    type: "",
  });

  const submitLoginForm = () => {
    console.log(`Submitted: ${JSON.stringify(userData)}`);
    navigate("/");
  };

  const isValidInput = () => {
    return Object.values(userData).every((value) => value !== "");
  };

  const usernameField = (
    <>
      <label htmlFor="login-username">Username: </label>
      <input
        type="text"
        id="login-username"
        value={userData.username}
        onChange={(e) => setUserData({ ...userData, username: e.target.value })}
      />
    </>
  );

  const passwordField = (
    <>
      <label htmlFor="login-password">Password: </label>
      <input
        type="password"
        id="login-password"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
    </>
  );

  const typeField = (
    <>
      <label htmlFor="login-type">Logging in as: </label>
      <select
        id="login-type"
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
      {usernameField}
      {passwordField}
      {typeField}
      {isValidInput() && (
        <button onClick={() => submitLoginForm()}>Login</button>
      )}
    </>
  );

  const loginForm = isLoggedIn ? <p>Already logged in</p> : form;
  return <>{loginForm}</>;
};

export default Login;
