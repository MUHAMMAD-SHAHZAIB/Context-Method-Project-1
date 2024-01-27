import React, { useContext, useState } from "react";
import UserContext from "../context/context";

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  const [InputData, setInputData] = useState({
    fname: "",
    lname: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputData((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!InputData.fname || !InputData.lname) {
      alert("Please fill in all the fields.");
    } else {
      console.log("Form submitted:", InputData);
      setUser(InputData);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="write something"
        className="px-3 py-2 rounded border-[4px] text-blue-700 border-red-600"
        value={InputData.value}
        name="fname"
        onChange={changeHandler}
      />

      <input
        type="text"
        name="lname"
        placeholder="write something"
        className="px-3 py-2 rounded border-[4px] text-blue-700 border-red-600"
        value={InputData.value}
        onChange={changeHandler}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
