import React, { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { fromEvent } from "rxjs";
import { useAuth } from "../context/auth";
import { writeDate } from "../../lib/settings/misc";
import { Usermode } from "usermode";
import "./user.css";
// const user = Usermode.addUser({
//   username: "user_33",
//   password: "pass_13",
//   fullname: "User 3",
// });

// Usermode.init("repo/passwd.json");
// console.log(Usermode.passMatch("user_33", "pass_33"));

function Login(): JSX.Element {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  writeDate();

  // function test(): void {
  //   // const user = Usermode.getUser("user_33");
  //   setToken(["user-33", 123]);
  //   navigate("/");
  // }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <span
              className="link-primary"
              onClick={() => navigate("/user/register")}
            >
              Register
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter username"
              onChange={(e) => changeUser(e)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

function changeUser(e: ChangeEvent<HTMLInputElement>): boolean {
  console.log(e.target.value);
  return true;
}

export default Login;
