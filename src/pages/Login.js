import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      throw new Error("Oops! Something went wrong.");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Real Time Chat App </span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
        <div className="log">
          <input type={"email"} placeholder={"Enter your E-mail"} />
          <i className="fa-solid fa-envelope"></i>
          </div>

          <div className="log">
          <input type={"password"} placeholder={"Enter your password"} />
          <i className="fa-solid fa-lock"></i>
          </div>
          <button type="Submit">Sign in</button>

          {error && (
            <span style={{ color: "white" }}>
              Oops! Something went wrong.
            </span>
          )}
        </form>
        <p>
          <Link className="link" to={"/forgot"}>Forgot Password? </Link>
        </p>
        <p>
          You don't have an account? <Link className="link"  to={"/register"}>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
