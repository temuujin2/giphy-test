import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { Button } from "@mui/material";

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };

  return (
    <div className="form">
      <h2>Шинэ хэрэглэгч үүсгэх</h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Name" type="name" ref={nameRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <Button variant="contained" type="submit">Бүртгүүлэх</Button>
      </form>
    </div>
  );
};

export default Signup;
