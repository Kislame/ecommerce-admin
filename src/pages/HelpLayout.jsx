import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function HelpLayout() {
  return (
    <div>
      <h2>Help layout</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
        delectus!
      </p>
      <nav className="flex gap-4 text-xl my-6 ml-4">
        <NavLink to="faq" className={'active:text-orange-600'}>
          faq
        </NavLink>
        <NavLink to="contact">contact</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default HelpLayout;
