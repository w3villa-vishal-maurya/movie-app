import React, {useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
import { authURL} from "../../../api/axios";
import "./index.scss";

const LOGIN_URL = "/api/login";

export default function SignInForm() {
  //navigate = useHistory
  const navigate = useNavigate();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error,] = useState("");
  const [token,setToken] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleSignIn = async (e) => {
    try {
      e.preventDefault();
      const response = await authURL.post(LOGIN_URL, {
        email: emailAddress,
        password: password,
      });

      if (response?.data?.token) {
        setToken(response?.data?.token);
        alert("Successfully Login!");
        navigate("/browse");
      }
    } catch (error) {
      console.log({ error: error });
    }
  };

  return (
    <div className="signInUpContainer pb-2">
      <h1 className="mt-5">Sign In</h1>
      <Form noValidate onSubmit={handleSignIn} method="POST">
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
        <Button disabled={isInvalid} type="submit">
          Sign In
        </Button>
      </Form>

      {error && (
        <div className="error" data-testid="error">
          {error}
        </div>
      )}
      <div className="bottom-container">
        <p className="signInText">
          Already a user? <Link to={ROUTES.SIGN_UP}>Sign up now.</Link>
        </p>
      </div>
    </div>
  );
}
