import React from "react";
import Image from "next/image";
import images from "/public/IMG/12.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <div className="flex-1">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </Link>
        <h1 className="btn btn-ghost text-3xl text-slate-200 hover:text-gray-900">
          PORTFOLIO
        </h1>
      </div>
      <Link href="/competences" className="p-4">
        <span className="text-slate-300 text-lg font-normal hover:font-bold">
          Competences
        </span>
      </Link>
      <Link href="/contact" className="p-4">
        <span className="text-slate-300 text-lg font-normal hover:font-bold">
          Contact
        </span>
      </Link>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                className="w-[22px] h-[22px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M15.133 10.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V1.1a1 1 0 0 0-2 0v2.364a.944.944 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C4.867 13.018 3 13.614 3 14.807 3 15.4 3 16 3.538 16h12.924C17 16 17 15.4 17 14.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.39A1.001 1.001 0 1 1 4.854 3.8a7.431 7.431 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 15.146 3.8a1 1 0 0 1 1.471-1.354 9.425 9.425 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM6.823 17a3.453 3.453 0 0 0 6.354 0H6.823Z" />
              </svg>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-20 rounded-full">
              <Image alt="css" src={images} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-slate-300"
          >
            <li>
              <Link href="/todolist" className="justify-between">
                TodoList
              </Link>
            </li>
            <li>
              <Link href="/users">Users</Link>
            </li>
            <li>
              <Link href="/lists">Listing</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
