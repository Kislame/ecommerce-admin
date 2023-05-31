import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Layout from './pages/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Users from './pages/Users';
import User from './pages/User';
import Newuser from './pages/Newuser';
import Products from './pages/Products';
import Product from './pages/Product';
import Createproduct from './pages/Createproduct';
import Register from './pages/Register';
import Unauthorized from './pages/Unauthorized';
import Welcome from './pages/Welcome';
import Missing from './pages/Missing';
import RequireAuth from './pages/RequireAuth';
import PersistLogin from './pages/PersistLogin';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Welcome />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="unauthorized" element={<Unauthorized />} />
      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="newProduct" element={<Createproduct />} />
            <Route path="users" element={<Users />} />
            <Route path="user/:userId" element={<User />} />
            <Route path="newUser" element={<Newuser />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<Missing />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

/*
<Route path="users" element={<Users />} />
          <Route path="user/:userId" element={<User />} />
          <Route path="newUser" element={<Newuser />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="newProduct" element={<Createproduct />} />*/
