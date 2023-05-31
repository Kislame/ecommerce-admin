import { useLocation, Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = () => {
  const location = useLocation();
  const { auth } = useAuth();

  return auth?.user?.isAdmin ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace={true} />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace={true} />
  );
};

export default RequireAuth;
