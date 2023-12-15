import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext.jsx";

const NavBar = () => {
  const { user } = useUserContext();
  const isLoggedIn = user !== null;

  const loggedOutLinks = (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/courses">Courses</Link>
      </li>
    </ul>
  );

  const loggedInLinks = (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/courses">Courses</Link>
      </li>
      <li>
        <Link to="/my-courses">My Courses</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
  );

  const listOfLinks = isLoggedIn ? loggedInLinks : loggedOutLinks

  return <nav>{listOfLinks}</nav>;
};

export default NavBar;
