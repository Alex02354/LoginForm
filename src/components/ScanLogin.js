// components/ScanLogin.js
import React from "react";
import offscan from "../assets/offscan.png";
import "../App.css";

const ScanLogin = ({ onBackToLogin }) => {
  return (
    <div>
      <p className="dark:text-regal-darkgray mb-7 text-center text-base text-neutral-500">
        Please use your BitCloud app to scan BC code to login.
      </p>
      <div className="scan-login-container flex justify-between items-center bg-gray-100 dark:bg-regal-bggray p-8 rounded-lg h-full flex-col">
        <img src={offscan} alt="offscan" />
        <button
          className="block bg-transparent border-neutral-500 dark:hover:border-white dark:border-transparent dark:hover:bg-transparent border font-semibold border-transparent dark:text-white hover:text-white hover:bg-neutral-700 text-gray py-2 px-4 rounded-full"
          onClick={onBackToLogin}
        >
          Download app
        </button>
      </div>
    </div>
  );
};

export default ScanLogin;
