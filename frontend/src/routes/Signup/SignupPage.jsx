// import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { isMobile } from "./../../utils/WindowSize";
import { CustButton } from "../../components/Button/CustButton";
import "./SignupPage.scss";

export const SignupPage = () => {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // fix how i am calling this. I need to wait for signUserUp to finish before trying
  // to send the user over
  const signUserUp = async () => {
    // reset errors
    setError(null);
    try {
      setIsLoading(true);
      const res = await axios.post(
        "http://localhost:3001/api/signup",
        JSON.stringify({
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      setApiData(res.data);
    } catch (err) {
      setError(err.response?.data);
    }
  };

  useEffect(() => {
    if (apiData?.user) {
      setIsLoading(false);
      // redirect to homepage
      navigate("/home");
    }
  }, [apiData]);

  return (
    <>
      <h1 className="mt-5">Sign Up</h1>
      <form className="me-auto ms-auto col-7 mt-4 text-start">
        <div className="mb-3">
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
        <div className="mb-3">
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
        <div className="mb-3">
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
        <div className="mb-3">
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
      </form>
      {isLoading ? (
        <div className="fw-bold yellow mt-3">LOADING ...</div>
      ) : (
        <CustButton
          text="Sign Up"
          onClick={async () => await signUserUp()}
          className={isMobile() ? "col-7 mt-3" : "px-4 mt-3"}
        />
      )}

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
    </>
  );
};
