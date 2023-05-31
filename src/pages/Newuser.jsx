function Newuser() {
  return (
    <div>
      <h1 className="md:text-3xl text-xl font-semibold  md:text-start text-center">
        New User
      </h1>

      <form className="mt-8  grid md:grid-cols-2  grid-cols-1  lg:place-items-start  place-items-center  gap-8">
        <div className="flex  flex-col space-y-4 sm:w-fit w-full  ">
          <label
            htmlFor="username"
            className="text-slate-700 font-semibold sm:text-lg"
          >
            Username
            <input
              type="text"
              name="username"
              id="username"
              placeholder="JhonDoe99"
              className=" block max-w-full mt-2 border-2 py-1 px-2  text-slate-500 font-semibold border-slate-300 rounded-md  placeholder-slate-400 placeholder:font-medium focus:outline-none focus:ring-1 focus:border-sky-500  focus:ring-sky-600"
            />
          </label>
          <label
            htmlFor="fullname"
            className="text-slate-700 font-semibold sm:text-lg"
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
            className="text-slate-700 font-semibold sm:text-lg"
          >
            Email
            <input
              type="text"
              name="email"
              id="email"
              placeholder="jhon199@gmail.com"
              className=" block max-w-full mt-2 border-2 py-1 px-2  text-slate-500 font-semibold border-slate-300 rounded-md  placeholder-slate-400 placeholder:font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600"
            />
          </label>
        </div>
        <div className="flex  flex-col space-y-4 sm:w-fit w-full ">
          <label
            htmlFor="password"
            className="text-slate-700 font-semibold sm:text-lg"
          >
            Password
            <input
              type="password"
              name="password"
              id="password"
              placeholder="jhon199@gmail.com"
              className=" block max-w-full mt-2 border-2 py-1 px-2  text-slate-500 font-semibold border-slate-300 rounded-md  placeholder-slate-400 placeholder:font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600"
            />
          </label>
          <label
            htmlFor="phone"
            className="text-slate-700 font-semibold sm:text-lg"
          >
            Phone
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="+13 233 245 869"
              className=" block max-w-full  mt-2 border-2 py-1 px-2  text-slate-500 font-semibold border-slate-300 rounded-md  placeholder-slate-400 placeholder:font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600"
            />
          </label>
          <label
            htmlFor="adress"
            className="text-slate-700 font-semibold sm:text-lg"
          >
            Adress
            <input
              type="text"
              name="adress"
              id="adress"
              placeholder="NEW YORK"
              className=" block max-w-full mt-2 border-2 py-1 px-2  text-slate-500 font-semibold border-slate-300 rounded-md  placeholder-slate-400 placeholder:font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600"
            />
          </label>
        </div>

        <fieldset>
          <legend className="mb-3 text-slate-700 font-medium text-lg">
            Gender
          </legend>
          <label
            htmlFor="Male"
            className="text-slate-700 font-semibold sm:text-lg"
          >
            Male
            <input
              type="radio"
              name="gender"
              id="Male"
              value="Male"
              className="mx-4"
            />
          </label>
          <label
            htmlFor="Female"
            className="text-slate-700 font-semibold sm:text-lg"
          >
            Female
            <input
              type="radio"
              name="gender"
              id="Female"
              value="Female"
              className="mx-4"
            />
          </label>
        </fieldset>
        <div>
          <label
            htmlFor="active"
            className="text-slate-700 font-semibold md:text-lg"
          >
            Active:
          </label>
          <select
            name="active"
            id="active"
            className="px-3 py-2  font-medium  text-lg ml-3"
          >
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn-sm sm:btn sm:btn-primary btn-primary btn lg:place-self-start"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default Newuser;
