import React from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/login";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="text-white flex flex-col items-center mt-[20%]">
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  );
};

export default App;
