import { Outlet } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import NavBar from "./NavBar";

const Layout = () => {
  const { user, logoutUser } = useUserContext();
  const isLoggedIn = user !== null;

  const logoutButton = isLoggedIn && (
    <button onClick={() => logoutUser()}>Logout</button>
  );

  return (
    <>
      <header>
        <h1>Learning Management System</h1>
        <NavBar />
        {logoutButton}
      </header>
      <main>{<Outlet />}</main>
    </>
  );
};

export default Layout;
