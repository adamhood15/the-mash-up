
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AccountSideBar({ accountPage, setAccountPage }) {
  function handleClick(e) {
    setAccountPage(e.target.textContent);
  }

  return (
    <>
      <div className="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-gray-300 h-full text-black transition-all duration-300 border-none z-10 sidebar">
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
              <li>
                  <a
                    href="#"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#fc2403] text-black hover:text-gray-800 border-l-4 border-transparent"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <i className="fa-solid fa-user"></i>
                    </span>
                    <span
                      className="ml-2 text-sm tracking-wide truncate"
                      onClick={handleClick}

                    >
                      User Profile
                    </span>
                  </a>
                </li>
            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#fc2403] text-black hover:text-gray-800 border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <i className="fa-solid fa-dollar-sign"></i>
                </span>
                <span
                  className="ml-2 text-sm tracking-wide truncate"
                  onClick={handleClick}
                >
                  Purchase History
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#fc2403] text-black hover:text-gray-800 border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <i className="fas fa-store"></i>
                </span>
                <span
                  className="ml-2 text-sm tracking-wide truncate"
                  onClick={handleClick}
                >
                  Product Orders
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
