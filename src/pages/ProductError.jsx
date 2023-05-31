import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

function ProductError() {
  const error = useRouteError();
  return (
    <div>
      <h2 className="text-6xl text-red-800 font-semibold">Error</h2>
      <p>{error.message}</p>
      <Link to="/">back to home page</Link>
    </div>
  );
}

export default ProductError;
