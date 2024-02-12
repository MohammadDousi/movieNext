import React, { useState } from "react";

export default function SignInUp() {
  const [inOrUp, setInOrUp] = useState("SignIn");

  return (
    <>
      {/*   Sing up box */}

      <section
        className={
          inOrUp === "SignUp"
            ? "flex flex-col justify-center items-center gap-6"
            : "hidden"
        }
      >
        <div className="w-full flex flex-col gap-1.5">
          <div className="w-full flex flex-row justify-between items-center">
            <h1 className="text-secondeColor/90 text-2xl lg:text-3xl font-bold capitalize">
              sign up
            </h1>
            <button
              onClick={() => setInOrUp("SignIn")}
              className="btn btn-sm !text-accentColor/90 hover:!bg-accentColor/90 "
            >
              to sing in
            </button>
          </div>
          <h2 className="w-full text-textColor/70 text-lg lg:text-xl font-normal capitalize">
            Create your account in movieland
          </h2>
        </div>

        <div className="w-full flex flex-col justify-start items-end gap-1.5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-textColor/70 capitalize tracking-wider">
                username
              </span>
            </div>
            <input className="input" />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-textColor/70 capitalize tracking-wider">
                password
              </span>
            </div>
            <input type="password" className="input" />
          </label>
        </div>

        <div className="w-full mt-4 flex flex-row justify-end items-center gap-3">
          <div className="modal-action !m-0 ">
            <label
              htmlFor="modalSignInUp"
              className="btn btn-md !btn-ghost hover:btn !text-textColor/70"
            >
              Close
            </label>
          </div>
          <button className="btn btn-md btn-primary !px-10">sign up</button>
        </div>
      </section>

      {/*   Sing in box */}
      <section
        className={
          inOrUp === "SignIn"
            ? "flex flex-col justify-center items-center gap-6"
            : "hidden"
        }
      >
        <div className="w-full flex flex-col gap-1.5">
          <div className="w-full flex flex-row justify-between items-center">
            <h1 className="text-secondeColor/90 text-2xl lg:text-3xl font-bold capitalize">
              Sing in
            </h1>
            <button
              onClick={() => setInOrUp("SignUp")}
              className="btn btn-sm !text-accentColor/90 hover:!bg-accentColor/90 "
            >
              Create account
            </button>
          </div>
          <h2 className="w-full text-textColor/70 text-lg lg:text-xl font-normal capitalize">
            welcome to movieland
          </h2>
        </div>

        <div className="w-full flex flex-col justify-start items-end gap-1.5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-textColor/70 capitalize tracking-wider">
                username
              </span>
            </div>
            <input className="input" />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-textColor/70 capitalize tracking-wider">
                password
              </span>
            </div>
            <input type="password" className="input" />
          </label>
        </div>

        <div className="w-full mt-4 flex flex-row justify-end items-center gap-3">
          <div className="modal-action !m-0 ">
            <label
              htmlFor="modalSignInUp"
              className="btn btn-md !btn-ghost hover:btn !text-textColor/70"
            >
              Close
            </label>
          </div>
          <button className="btn btn-md btn-primary !px-10">sign in</button>
        </div>
      </section>
    </>
  );
}
