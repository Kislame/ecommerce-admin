import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Sidebar({ open, handleToggle }) {
  return (
    <nav
      className={` h-[calc(100vh-64px)] px-4 pt-[15vh] shadow-md fixed z-50 top-16 duration-300
      ${open ? 'w-72' : 'w-20'}     `}
    >
      <button
        onClick={() => handleToggle()}
        className={`
        } btn  btn-circle btn-outline border-slate-200     absolute top-9 left-0 right-0  m-auto `}
      >
        {open === true ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
      <ul className={`space-y-2 py-4 mb-8 mx-auto }`}>
        <li className="rounded-lg">
          <NavLink to="/dashboard/">
            {({ isActive, isPending }) => (
              <div
                className={` flex items-center ${
                  isActive && 'bg-primary text-primary-content'
                } flex gap-2 cursor-pointer ${
                  isActive ? 'hover:bg-none' : 'hover:bg-slate-400/20 '
                } p-3 rounded-lg active:bg-primary  active:text-primary-content`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <span
                  className={`${!open && 'hidden'} duration-200 origin-left`}
                >
                  Home
                </span>
              </div>
            )}
          </NavLink>
        </li>
        <li className="rounded-lg">
          <NavLink to="/dashboard/sales">
            {({ isActive, isPending }) => (
              <div
                className={` ${
                  isActive && 'bg-primary text-primary-content'
                } flex gap-2 cursor-pointer ${
                  isActive ? 'hover:bg-none' : 'hover:bg-slate-400/20 '
                } p-3 rounded-lg active:bg-primary  active:text-primary-content`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>

                <span
                  className={`${!open && 'hidden'} duration-200 origin-left`}
                >
                  Sales
                </span>
              </div>
            )}
          </NavLink>
        </li>

        <li className="rounded-lg">
          <NavLink to="/dashboard/users">
            {({ isActive, isPending }) => (
              <div
                className={` ${
                  isActive && 'bg-primary text-primary-content'
                } flex gap-2 cursor-pointer ${
                  isActive ? 'hover:bg-none' : 'hover:bg-slate-400/20 '
                } p-3 rounded-lg active:bg-primary  active:text-primary-content`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>

                <span
                  className={`${!open && 'hidden'} duration-200 origin-left`}
                >
                  Users
                </span>
              </div>
            )}
          </NavLink>
        </li>
        <li className="rounded-lg">
          <NavLink to="/dashboard/analytics">
            {({ isActive, isPending }) => (
              <div
                className={` ${
                  isActive && 'bg-primary text-primary-content'
                } flex gap-2 cursor-pointer ${
                  isActive ? 'hover:bg-none' : 'hover:bg-slate-400/20 '
                } p-3 rounded-lg active:bg-primary  active:text-primary-content`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                  />
                </svg>

                <span
                  className={`${!open && 'hidden'} duration-200 origin-left`}
                >
                  Analytics
                </span>
              </div>
            )}
          </NavLink>
        </li>
      </ul>
      <ul className={`space-y-2 py-4 mb-8 mx-auto }`}>
        <li className="rounded-lg ">
          <NavLink to={'/dashboard/products'}>
            {({ isActive, isPending }) => (
              <div
                className={` ${
                  isActive && 'bg-primary text-primary-content'
                } flex gap-2 cursor-pointer ${
                  isActive ? 'hover:bg-none' : 'hover:bg-slate-400/20 '
                } p-3 rounded-lg active:bg-primary  active:text-primary-content`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                  />
                </svg>

                <span
                  className={`${!open && 'hidden'} duration-200 origin-left`}
                >
                  Products
                </span>
              </div>
            )}
          </NavLink>
        </li>
        <li className="flex gap-2 cursor-pointer active:bg-primary p-3  active:text-primary-content hover:bg-slate-400/20 rounded-lg ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <span className={`${!open && 'hidden'} duration-200 origin-left`}>
            Transitions
          </span>
        </li>
        <li className="flex gap-2 cursor-pointer active:bg-primary p-3  active:text-primary-content hover:bg-slate-400/20 rounded-lg ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <span className={`${!open && 'hidden'} duration-200 origin-left`}>
            Mail
          </span>
        </li>
        <li className="flex gap-2 cursor-pointer active:bg-primary p-3  active:text-primary-content hover:bg-slate-400/20 rounded-lg ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>

          <span className={`${!open && 'hidden'} duration-200 origin-left`}>
            Messages
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
