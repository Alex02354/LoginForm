import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./custom-phone-input.css";

const LoginForm = ({ onScanLoginClick }) => {
  const [value, setValue] = useState();
  const [isEmailSelected, setIsEmailSelected] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <form>
      <div className="flex justify-center m-5 gap-5">
        <button
          type="button"
          className={`font-semibold py-1 px-4 rounded-full dark:text-white dark:hover:border-neutral-500 ${
            isEmailSelected
              ? "bg-neutral-900 text-white border border-neutral-900 dark:bg-regal-bggray dark:hover:border-transparent"
              : "text-neutral-500 hover:border hover:border-neutral-500 border dark:hover:border-neutral-500 border-transparent"
          }`}
          onClick={() => setIsEmailSelected(true)}
        >
          Email
        </button>
        <button
          type="button"
          className={`font-semibold py-1 px-4 rounded-full dark:text-white dark:hover:border-neutral-500 ${
            !isEmailSelected
              ? "bg-neutral-900 text-white border border-neutral-900 dark:bg-regal-bggray dark:hover:border-transparent"
              : "text-neutral-500 hover:border hover:border-neutral-500 dark:hover:border-neutral-500 border border-transparent"
          }`}
          onClick={() => setIsEmailSelected(false)}
        >
          Mobile
        </button>
      </div>
      {isEmailSelected ? (
        <div className="mb-3">
          <label className="font-medium mb-2 flex dark:text-regal-header">
            Email
          </label>
          <input
            type="text"
            placeholder="Email address"
            className="w-full border rounded-xl bg-transparent border-regal-darkgray dark:border-regal-darkgray p-3 dark:text-regal-darkgray"
          />
        </div>
      ) : (
        <div className="mb-3 ">
          <label className="font-medium mb-2 flex dark:text-regal-header">
            Mobile
          </label>
          <PhoneInput
            className="custom-phone-input"
            international
            defaultCountry="US"
            value={value}
            onChange={setValue}
          />
        </div>
      )}
      <div className="mb-3 relative">
        <label className="font-medium mb-2 flex dark:text-regal-header">
          Password
        </label>
        <div className="relative">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            className="w-full border rounded-xl bg-transparent border-regal-darkgray dark:border-regal-darkgray p-3 dark:text-regal-darkgray pr-10"
          />
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-regal-darkgray dark:text-regal-darkgray"
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
          </span>
        </div>
      </div>
      <div className="flex justify-between mb-6">
        <span
          className="cursor-pointer dark:text-regal-header"
          onClick={onScanLoginClick}
        >
          Scan to login
        </span>
        <span className=" text-regal-blue cursor-pointer">
          Forgot password?
        </span>
      </div>
      <button className="block bg-regal-blue hover:bg-blue-800 text-white w-full p-3 px rounded-full">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
