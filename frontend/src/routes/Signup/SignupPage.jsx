import { useState } from "react";

import { isMobile } from "./../../utils/WindowSize";
import { CustButton } from "../../components/Button/CustButton";
import { useSignup } from "../../hooks/useSignup";
import "./SignupPage.scss";

export const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error, isLoading } = useSignup();

  const signUserUp = async () => {
    // call signup hook
    await signup(email, password, firstName, lastName);
  };

  return (
    <div className="pt-5">
      <h1>Sign Up</h1>
      <form className="mx-auto col-7 mt-4">
        <div className="mb-3 text-start">
          <label htmlFor="firstName" className="form-label">
            First Name <span style={{ color: "red" }}>*</span>
          </label>
          <input
            className="form-control TransparentInput white"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            id="firstName"
            required
            aria-describedby="firstNameHelp"
          />
        </div>
        <div className="mb-3 text-start">
          <label htmlFor="lastName" className="form-label">
            Last Name <span style={{ color: "red" }}>*</span>
          </label>
          <input
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            className="form-control TransparentInput white"
            id="lastName"
            required
            aria-describedby="lastNameHelp"
          />
        </div>
        <div className="mb-3 text-start">
          <label htmlFor="email" className="form-label">
            Email Address <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control TransparentInput white"
            id="email"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3 text-start">
          <label htmlFor="password" className="form-label">
            Password <span style={{ color: "red" }}>*</span>
          </label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            required
            className="form-control TransparentInput white"
            id="password"
          />
        </div>
        {isLoading ? (
          <div className="fw-bold yellow mt-3">LOADING ...</div>
        ) : (
          <CustButton
            text="Sign Up"
            onClick={async () => signUserUp()}
            className={
              (isMobile() ? "col-7 mt-3" : "px-4 mt-3") + " text-center"
            }
          />
        )}
      </form>

      {error && (
        <div className="fw-bold my-3 pink">
          Error: {error?.email || error?.password}
        </div>
      )}
      <h5 className="mt-5">
        Already a user?{" "}
        <a className="white" href="/login">
          {" "}
          Login
        </a>
      </h5>
    </div>
  );
};
