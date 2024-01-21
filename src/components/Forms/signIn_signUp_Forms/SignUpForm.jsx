import React, { useContext, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
import "./index.scss";
import { authURL, movieURL } from "../../../api/axios";

const REG_URL = "/api/register";

export default function SignUpForm() {
  //navigate = useHistory
  const navigate = useNavigate();

  // const [ firstName, setFirstName ] = useState('');
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("")
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();
      console.log("Hello");
      const response = await authURL.post(REG_URL, {
        email: emailAddress,
        password: password,
      });

      console.log(response?.data);
      if(response?.data?.token){
        setToken(response?.data?.token);
        alert("Successfully Registred!");
        navigate("/signin");
      }
    } catch (error) {
      console.log({ error: error });
    }
  };

  return (
    <div className="signInUpContainer pb-2">
      <h1 className="mt-5">Sign Up</h1>
      <Form noValidate onSubmit={handleSignUp} method="POST">
        {/* <FloatingLabel
            controlId='floatingNameInput'
            label="First name"
            aria-label='First name'
          >
            <Form.Control 
              required  
              type='text' 
              placeholder='First Name'
              value={firstName}
              onChange={({target}) => setFirstName(target.value)}
            />
          </FloatingLabel> */}
        <FloatingLabel
          controlId="floatingEmailInput"
          label="Email address"
          aria-label="Email address"
        >
          <Form.Control
            required
            type="email"
            placeholder="name@example.com"
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPasswordInput"
          label="Password"
          aria-label="Password"
        >
          <Form.Control
            required
            type="password"
            placeholder="password"
            value={password}
            autoComplete="off"
            onChange={({ target }) => setPassword(target.value)}
          />
        </FloatingLabel>
        <Button disabled={isInvalid} type="submit" data-testid="sign-up">
          Sign Up
        </Button>
      </Form>
      {error && <div className="error">{error}</div>}
      <div className="bottom-container">
        <p className="signInText">
          Already a user? <Link to={ROUTES.SIGN_IN}>Sign in now.</Link>
        </p>
      </div>
    </div>
  );
}
