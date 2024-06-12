import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import leftbg from "./assets/leftbg.png";
import logo from "./assets/logo.png";
import "./App.css";
import offscan from "./assets/offscan.png";

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

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScanLogin, setShowScanLogin] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleScanLoginClick = () => {
    setShowScanLogin(true);
  };

  const handleBackToLoginClick = () => {
    setShowScanLogin(false);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col flex-auto w-full h-screen">
        <div className="h-full">
          <div className="absolute top-0 left-0 right-0 flex flex-wrap items-center justify-between p-4 m-8">
            <div className="h-10 w-auto lg:w-auto mx-auto sm:mx-0 flex-row flex gap-3">
              <img src={logo} alt="Logo" />
              <h1 className="text-3xl font-medium text-black lg:text-white dark:text-white">
                BitCloud
              </h1>
            </div>
            <div className="lg:mt-0 text-center lg:text-right w-full lg:w-auto sm:w-auto dark:text-white">
              Don't have an account?{" "}
              <span className="text-regal-blue cursor-pointer">
                Sign up for free
              </span>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 h-full">
            <div
              className="bg-cover bg-no-repeat hidden lg:flex"
              style={{
                backgroundImage: `url(${leftbg})`,
                backgroundColor: "#23262F",
              }}
            ></div>
            <div className="col-span-3 lg:col-span-2 flex justify-center items-center dark:bg-neutral-900">
              <div className="min-w-[280px] md:min-w-[450px] px-4 md:px-8">
                <div className="mb-8 text-center">
                  <h1 className="text-4xl font-bold dark:text-white tracking-wide">
                    Sign in to BitCloud
                  </h1>
                  <p className="dark:text-regal-darkgray mt-8 text-neutral-500">
                    Please ensure you are visiting the correct url.
                  </p>
                </div>
                <div className="bg-neutral-100 text-center font-medium p-2.5 rounded-full w-full dark:bg-regal-bggray">
                  <ion-icon
                    class="ion-icon"
                    name="lock-closed-outline"
                  ></ion-icon>
                  <span className="text-green-500 align-top">https://</span>
                  <span className="text-black dark:text-white align-top">
                    accounts.bitcloud.com/login
                  </span>
                </div>
                <hr className="my-8 mt-9 h-0.5 border-t-0 bg-regal-header opacity-100 dark:opacity-50" />
                <div className="login-form-container">
                  {showScanLogin ? (
                    <ScanLogin onBackToLogin={handleBackToLoginClick} />
                  ) : (
                    <LoginForm onScanLoginClick={handleScanLoginClick} />
                  )}
                </div>
              </div>
            </div>
          </div>
          <button
            className="absolute w-12 h-12 bottom-14 right-14 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
            onClick={toggleDarkMode}
          >
            {darkMode ? "LHT" : "DRK"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
