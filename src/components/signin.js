import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <Box className="form">
      <h2> Нэвтрэх хэсэг </h2>
      <form onSubmit={onSubmit}>
        <input style={{border:'none', boxShadow: "-2px -2px 6px rgba(255,255,255,0.45), 2px 2px 9px rgba(94,104,121,0.3) "}} placeholder="Имэйл хаяг" type="email" ref={emailRef} />
        <input style={{border:'none', boxShadow: "-2px -2px 6px rgba(255,255,255,0.45), 2px 2px 9px rgba(94,104,121,0.3) "}} placeholder="Нууц үг" type="password" ref={psdRef} />
        <Button sx={{width:"94%", height:'40px'}} variant="contained" type="submit">Нэвтрэх</Button>
        <p onClick={forgotPasswordHandler}>Нууц үгээ мартсан?</p>
      </form>
    </Box>
  );
};

export default Signin;
