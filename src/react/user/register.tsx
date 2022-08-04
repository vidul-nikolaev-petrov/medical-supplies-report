import React, { useEffect, useRef } from "react";
import { fromEvent, combineLatest } from "rxjs";
import { startWith, debounceTime, map, filter } from "rxjs/operators";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import { Usermode } from "usermode";
import { Button } from "react-bootstrap";
import "./user.css";

function Register(): JSX.Element {
  //   const { setToken } = useAuth();
  const navigate = useNavigate();
  const refName = useRef(null);
  const refPass1 = useRef(null);
  const refPass2 = useRef(null);
  const refSubmit = useRef(null);

  const map$ = () =>
    map((event: InputEvent) => (event.target as HTMLInputElement).value);

  const readPass = (ref) => fromEvent(ref.current, "input").pipe(map$());
  const filterPass = (ref) => readPass(ref).pipe(filter((v) => v.length >= 3));

  useEffect(() => {
    const readName$ = fromEvent(refName.current, "input").pipe(map$());
    const filterName$ = readName$.pipe(filter((v) => new Set(v).size > 2));

    const combineAll$ = combineLatest(
      [
        readName$,
        filterName$,
        readPass(refPass1),
        readPass(refPass2),
        filterPass(refPass1),
      ],
      (u1, u2, p1, p2, p3) => u1 === u2 && p1 === p2 && p1 === p3
    );

    combineAll$.subscribe((v) => {
      refSubmit.current.disabled = !v;
      console.log(">>>", v, refSubmit);
    });
  });

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="text-center">
            Already registered?{" "}
            <span
              className="link-primary"
              onClick={() => navigate("/user/login")}
            >
              Login
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              ref={refName}
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              ref={refPass1}
              type="password"
              className="form-control mt-1"
              placeholder="input password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password comfirmation</label>
            <input
              ref={refPass2}
              type="password"
              className="form-control mt-1"
              placeholder="input password again"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              ref={refSubmit}
              type="submit"
              className="btn btn-primary"
              disabled
            >
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

export default Register;
