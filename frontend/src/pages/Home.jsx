import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

const Home = () => {
  const { user } = useUserContext();
  const isLoggedIn = user !== null;
  
  const loginLinks = (
    <>
      <p>Already a user? </p>
      <Link to="/login">Login here</Link>
      <p>New user? </p>
      <Link to="/signup">Signup here</Link>
    </>
  );

  const username = isLoggedIn ? user.username : "";
  const welcomeMessage = (
    <p>Hi, {username}! Start learning by clicking on Courses.</p>
  );

  const homeDetails = isLoggedIn ? welcomeMessage : loginLinks;

  return <>{homeDetails}</>;
};

export default Home;
