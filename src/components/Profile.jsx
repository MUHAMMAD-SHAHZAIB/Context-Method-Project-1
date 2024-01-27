import React, { useContext } from "react";
import UserContext from "../context/context";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      Welcome {user?.fname} {user?.lname}
    </div>
  );
};

export default Profile;
