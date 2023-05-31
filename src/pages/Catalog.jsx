import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
function Catalog() {
  return (
    <div>
      <h2 className="text-4xl font-semibold tracking-widest text-sky-800 text-center">
        Catalog
      </h2>

      <section className="mt-8 max-w-6xl mx-auto">
        <Outlet />
      </section>
    </div>
  );
}

export default Catalog;
