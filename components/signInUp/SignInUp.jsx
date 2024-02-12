import React from "react";

export default function SignInUp() {
  return (
    <section className="flex flex-col justify-center items-center gap-3">
      <h1 className="w-full text-secondeColor/90 text-2xl lg:text-3xl font-bold capitalize">
        Sing in
      </h1>
      <h2 className="w-full text-textColor/70 text-lg lg:text-xl font-normal capitalize">
        welcome to movieland
      </h2>

      <div className="w-full flex flex-col justify-start items-end gap-3">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-textColor/70 capitalize tracking-wider">
              username
            </span>
          </div>
          <input className="input input-md w-full bg-textColor/10 text-textColor/90 font-bold text-base tracking-wider border-textColor/50 focus:border-textColor/10" />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-textColor/70 capitalize tracking-wider">
              password
            </span>
          </div>
          <input
            type="password"
            className="input input-md w-full bg-textColor/10 text-textColor/90 font-bold text-base tracking-wider border-textColor/50 focus:border-textColor/10"
          />
        </label>

        <div className="w-full flex flex-row justify-end items-center gap-3">
          <div className="modal-action">
            <label
              htmlFor="modalSignInUp"
              className="btn btn-md !btn-ghost hover:btn !text-textColor/70"
            >
              Close
            </label>
          </div>
          <button className="btn btn-md btn-primary !px-10 mt-5">
            sign in
          </button>
        </div>
      </div>
    </section>
  );
}
