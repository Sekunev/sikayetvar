import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Ripple, Input, initTE } from "tw-elements";
initTE({ Ripple, Input });

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);
  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(email));
    sessionStorage.setItem("password", JSON.stringify(password));
    console.log(password);
    navigate("/home");
  };
  return (
    <div className="bg-gradient-to-l from-[#ffc23d] to-[#FEAF00]  h-[100vh] py-32">
      <div className="mx-auto  block max-w-sm rounded-xl bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        {/*Title1*/}
        <div className="flex justify-center items-center">
          <div className="w-1 h-10  bg-[#FEAF00] "></div>
          <h1 className="font-bold ml-2 text-3xl uppercase">Manage Courses</h1>
        </div>
        {/*Title2*/}
        <div className="">
          <h4 className="font-bold mt-10 text-1xl text-center uppercase">
            Sing In
          </h4>
          <p className="text-[#6C6C6C] text-sm mt-5 mb-10  text-center">
            Enter your credentials to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          {/*E-mail input*/}
          <div className="relative mb-6" data-te-input-wrapper-init="">
            <input
              type="email"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="exampleInputEmail1"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >
              Email address
            </label>
          </div>
          {/*Password input*/}
          <div className="relative mb-6" data-te-input-wrapper-init="">
            <input
              type="password"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="exampleInputPassword1"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >
              Password
            </label>
          </div>
          {/*Submit button*/}
          <button
            type="submit"
            className="w-full inline-block rounded bg-[#FEAF00] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e69e03] transition duration-150 ease-in-out hover:bg-[##e69e03] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[##e69e03] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#e69e03]active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init=""
            data-te-ripple-color="light"
          >
            Submit
          </button>
          {/*Forgot text*/}
          <div className="flex justify-center">
            <p className="text-[#6C6C6C] text-xs mt-5">
              Forgot your password?
              <span className="text-[#FEAF00] cursor-pointer">
                {" "}
                Reset Password
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
