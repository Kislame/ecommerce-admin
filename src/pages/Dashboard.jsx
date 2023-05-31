import Tobar from '../components/Tobar';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function Dashboard() {
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setOpen(!open);
  }
  return (
    <>
      <div>
        <Sidebar open={open} handleToggle={handleToggle} />
        <Tobar />
        <div
          className={`mt-16 overflow-x-hidden relative  ${
            open === true ? 'ml-72' : 'ml-20'
          }  `}
        >
          <div className="container mx-auto sm:px-6 px-4     py-8 ">
            <Outlet />
          </div>
          <div
            className={`lg:hidden ${
              open === true
                ? ' block absolute inset-0 backdrop-blur-sm bg-black/50  z-10'
                : 'hidden'
            }`}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

/*
   <Tobar />
      <main className="flex">
        <Sidebar open={open} />

        <div className="flex-[4] relative">
          <div className="container mx-auto px-6 py-8">
            <Outlet />
          </div>
        </div>
      </main>

*/
