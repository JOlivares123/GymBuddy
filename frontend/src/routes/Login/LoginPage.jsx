import { useState } from "react";

import { CustButton } from "../../components/Button/CustButton";
import { useLogin } from "../../hooks/useLogin";
import { isMobile } from "../../utils/WindowSize";
import "./LoginPage.scss";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const logUserIn = async () => {
    // call login hook
    await login(email, password);
  };

  return (
    <div className="pt-5">
      <h1>Login</h1>
      <form className="mx-auto col-7 mt-4">
        <div className="mb-3 text-start">
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
        <div className="mb-3 text-start">
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
        {isLoading ? (
          <div className="fw-bold yellow mt-3">LOADING ...</div>
        ) : (
          <CustButton
            text="Login"
            color="pink"
            onClick={async () => await logUserIn()}
            className={isMobile() ? "col-7 mt-3" : "px-4 mt-3" + " text-center"}
          />
        )}
      </form>
      {error && (
        <div className="fw-bold my-3 pink">
          Error: {error?.email || error?.password}
        </div>
      )}
      <h5 className="mt-5">
        Need an account?{" "}
        <a className="yellow" href="/signup">
          {" "}
          Sign Up
        </a>
      </h5>
    </div>
  );
};
