// import { useForm } from "react-hook-form";

import { isMobile } from "./../../utils/WindowSize";
import { CustButton } from "../../components/Button/CustButton";
import "./SignupPage.scss";

export const SignupPage = () => {
  return (
    <>
      <h1 className="mt-5">Sign Up</h1>
      <form className="me-auto ms-auto col-7 mt-4 text-start">
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="firstName"
            className="form-control TransparentInput white"
            id="firstName"
            aria-describedby="firstNameHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="lastName"
            className="form-control TransparentInput white"
            id="lastName"
            aria-describedby="lastNameHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="email"
            className="form-control TransparentInput white"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="password"
            className="form-control TransparentInput white"
            id="password"
          />
        </div>
      </form>
      <CustButton
        text="Sign Up"
        className={isMobile() ? "col-7 mt-3" : "px-4 mt-3"}
      />
      <h5 className="mt-5">
        Already a user?{" "}
        <a className="white" href="/login">
          {" "}
          Login
        </a>
      </h5>
    </>
  );
};
