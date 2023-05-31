import Avatar from '../components/Avatar';
import { Link } from 'react-router-dom';
function User() {
  return (
    <div className="">
      <section className="flex items-center justify-between">
        <h1 className="md:text-3xl text-xl font-semibold">Edit User</h1>
        <Link
          to="/dashboard/newUser"
          className="btn-sm  sm:btn sm:btn-primary sm:btn-outline btn btn-primary btn-outline"
        >
          Create
        </Link>
      </section>
      <section className="mt-8 flex  lg:flex-row lg:gap-0 flex-col gap-6">
        <div className="flex-1 shadow-lg rounded-xl p-4 space-y-6">
          <div className="flex items-center sm:gap-8 gap-4">
            <Avatar size="small" />
            <div>
              <p className="font-semibold sm:text-lg text-base">jhon doe</p>
              <p className="text-gray-500  sm:text-base text-sm font-medium">
                Software Enginer
              </p>
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-gray-500 ">Account Details</p>
            <div className="flex items-center sm:gap-4  gap-2">
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
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Jhone198</span>
            </div>
            <div className="flex items-center sm:gap-4  gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                  clipRule="evenodd"
                />
              </svg>
              <span>10.15.1999</span>
            </div>
            <p className="text-gray-500">Contact Details</p>
            <div className="flex items-center sm:gap-4  gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M8 16.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z" />
                <path
                  fillRule="evenodd"
                  d="M4 4a3 3 0 013-3h6a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V4zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V2.5h1A1.5 1.5 0 0114.5 4v12a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 16V4A1.5 1.5 0 017 2.5h1z"
                  clipRule="evenodd"
                />
              </svg>
              <span>+13 223 445 869</span>
            </div>
            <div className="flex items-center sm:gap-4  gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                  clipRule="evenodd"
                />
              </svg>
              <span>jhon199@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="flex-[2] shadow-lg rounded-xl p-4 lg:ml-5">
          <form className="grid md:grid-cols-2 grid-cols-1  md:place-items-start place-items-center gap-6">
            <div className="flex flex-col space-y-4 sm:w-fit w-full ">
              <label
                htmlFor="username"
                className="text-slate-700  sm:text-lg font-semibold"
              >
                Username
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="JhonDoe99"
                  className=" block max-w-full mt-2 border-2 py-1 px-2  text-slate-500 font-semibold border-slate-300 rounded-md  placeholder-slate-400 placeholder:font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600"
                />
              </label>
              <label
                htmlFor="fullname"
                className="text-slate-700  sm:text-lg font-semibold"
              >
                Full Name
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Jhon doe"
                  className=" block max-w-full mt-2 border-2 py-1 px-2  text-slate-500 font-semibold border-slate-300 rounded-md  placeholder-slate-400 placeholder:font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600"
                />
              </label>
              <label
                htmlFor="email"
                className="text-slate-700  sm:text-lg font-semibold"
              >
                Email
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="jhon199@gmail.com"
                  className=" block  max-w-full mt-2 border-2 py-1 px-2  text-slate-500 font-semibold border-slate-300 rounded-md  placeholder-slate-400 placeholder:font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600"
                />
              </label>
              <label
                htmlFor="phone"
                className="text-slate-700  sm:text-lg font-semibold"
              >
                Phone
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+13 233 245 869"
                  className=" block  max-w-full mt-2 border-2 py-1 px-2  text-slate-500 font-semibold border-slate-300 rounded-md  placeholder-slate-400 placeholder:font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600"
                />
              </label>
            </div>
            <div className="flex  flex-col items-center gap-6 mt-4">
              <div>
                <Avatar size={'medium'} />
              </div>
              <label htmlFor="image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12 fill-primary cursor-pointer"
                >
                  <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                  <path
                    fillRule="evenodd"
                    d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <input type="file" className="hidden" id="image" name="image" />
              </label>
            </div>
            <button
              className="btn-sm sm:btn sm:btn-primary btn-primary btn   md::place-self-start "
              type="submit"
            >
              Update
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default User;
