import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function About() {
  const [user, setUser] = useState('mario');
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div className="h-full  flex items-center flex-col">
      <h2 className="text-orange-700 text-2xl font-semibold ">About Page</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae a
        vel voluptate maiores sequi ex quis quasi, ducimus similique labore
        laudantium minima, inventore natus accusamus veritatis quos libero
        itaque aperiam iusto facilis aliquam. Saepe quaerat eligendi, iste ad
        velit impedit?
      </p>
      <button
        className="btn btn-secondary place-self-center"
        type="button"
        onClick={() => setUser(null)}
      >
        Logout
      </button>
    </div>
  );
}

export default About;
