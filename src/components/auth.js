import React, { useState } from "react";
import Signin from "./signin";
import Signup from "./signup";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="container">
      {!index ? <Signin /> : <Signup />}
      <p onClick={toggleIndex}>
        {!index ? "Бүртгэл үүсгэх " : "Нэвтрэх хэсэгрүү буцах"}
      </p>
    </div>
  );
};

export default Auth;

