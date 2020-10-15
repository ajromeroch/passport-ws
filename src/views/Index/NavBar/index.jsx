import React, { useState, useEffect } from "react";
import Logo from "./logo.jpg";
import { Link, useRouteMatch } from "react-router-dom";

const Pair = ({ children }) => (
  <div className="flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
    {children}
  </div>
);

const EmptyButton = ({ children }) => (
  <Link
    to={`/${children.toLowerCase()}`}
    className="whitespace-no-wrap text-base leading-6 font-medium text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150"
  >
    {children}
  </Link>
);

const RoundButton = ({ children }) => (
  <span className="inline-flex rounded-md shadow-sm">
    <Link
      to={`/${children.toLowerCase()}`}
      className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-500 hover:bg-pink-500 focus:outline-none focus:border-purple-200 focus:shadow-outline-purple active:bg-pink-700 transition ease-in-out duration-150"
    >
      {children}
    </Link>
  </span>
);

export default () => {
  let match = useRouteMatch({
    path: "/secret",
  });

  return (
    <div className="bg-purple-900">
      <div className="flex justify-between items-center px-6 py-2">
        <div className="w-0 flex-1">
          <Link to="/" className="flex">
            <img src={Logo} className="h-12 w-auto rounded-full" alt="logo" />
          </Link>
        </div>
        {user ? (
          <Pair>
            <EmptyButton>Login</EmptyButton>
            <RoundButton>Register</RoundButton>
          </Pair>
        ) : (
          <Pair>
            <EmptyButton>Secret</EmptyButton>
            <RoundButton>Logout</RoundButton>
          </Pair>
        )}
      </div>
    </div>
  );
};
