import { useUserContext } from "../contexts/UserContext";

const Courses = () => {
  const { user } = useUserContext();

  const isLoggedIn = user !== null;

  const learnerList = <p>Learner List Here</p>;
  const administratorList = <p>Administrator List Here</p>;

  const userType = isLoggedIn ? user.type : null;
  const loggedInList = userType === "learner" ? learnerList : administratorList;

  const loggedOutList = <p>Logged out List Here</p>;
  
  const coursesList = isLoggedIn ? loggedInList : loggedOutList;
  return <>{coursesList}</>;
};

export default Courses;
