import { userRequest } from '../requestMethods';
import { useEffect } from 'react';
import useRefreshToken from './useRefreshToken';
import useAuth from './useAuth';

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = userRequest.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          //if true means that its our inital request
          config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = userRequest.interceptors.response.use(
      (response) => response,
      async (error) => {
        //in case our token is expired.

        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true; //retry only once
          const newAccessToken = await refresh();
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return userRequest(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      userRequest.interceptors.request.eject(requestIntercept);
      userRequest.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return userRequest;
};

export default useAxiosPrivate;
