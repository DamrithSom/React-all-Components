import React, { useState } from "react";

const From = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handlerPass = (e) => {
    setPassword(e.target.value);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(email, password)
  };
  return (
    <div className="flex justify-center items-center mt-40">
      <div className="bg-sky-300 w-96 h-96 rounded-lg flex justify-center items-center">
        <form className="flex flex-col justify-center items-center p-6 rounded-lg space-y-4 w-80">
          <label htmlFor="Email" className="text-gray-900 font-semibold">
            Email
          </label>
          <input
            value={email}
            onChange={handlerEmail}
            id="Email"
            type="email"
            placeholder="Email"
            className="p-2 rounded-lg border-none focus:outline-none w-full"
          />

          <label htmlFor="Pass" className="text-gray-900 font-semibold">
            Password
          </label>
          <input
            value={password}
            onChange={handlerPass}
            id="Pass"
            type="password"
            placeholder="Password"
            className="p-2 rounded-lg focus:outline-none w-full"
          />

          <button
            onClick={handlerSubmit}
            type="submit"
            className="bg-blue-600 hover:bg-blue-400 text-white p-2 rounded-lg w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default From;
