// import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { CustButton } from "../../components/Button/CustButton";
import { isMobile } from "../../utils/WindowSize";
import "./LoginPage.scss";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    if (apiData?.user) {
      setIsLoading(false);
      // redirect to homepage
      navigate("/home");
    }
  }, [apiData]);

  const logUserIn = async () => {
    setError(null);

    try {
      setIsLoading(true);

      const res = await axios.post(
        "http://localhost:3001/api/login",
        JSON.stringify({
          email: email,
          password: password,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(res);
      setApiData(res.data);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <>
      <h1 className="mt-5">Login</h1>
      <form className="me-auto ms-auto col-7 mt-4 text-start">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control TransparentInput white"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control TransparentInput white"
            id="password"
          />
        </div>
      </form>
      {isLoading ? (
        <div className="fw-bold yellow mt-3">LOADING ...</div>
      ) : (
        <CustButton
          text="Login"
          onClick={async () => await logUserIn()}
          className={isMobile() ? "col-7 mt-3" : "px-4 mt-3"}
        />
      )}
      {error && <div className="fw-bold my-3 pink">Error: {error?.data}</div>}
      <h5 className="mt-5">
        Need an account?{" "}
        <a className="white" href="/signup">
          {" "}
          Sign Up
        </a>
      </h5>
    </>
  );
};
