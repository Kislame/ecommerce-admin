import Productstable from '../components/Productstable';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useLocation, useNavigate } from 'react-router-dom';

function Products() {
  const [products, setproducts] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const userRequest = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getProducts = async () => {
      try {
        const res = await userRequest('/product', {
          signal: controller.signal,
        });
        isMounted && setproducts(res.data);
      } catch (err) {
        console.error(err);
        navigate('/login', { state: { from: location }, replace: true });
      }
    };

    getProducts();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <div>
      <Productstable products={products} />
    </div>
  );
}

export default Products;

//loader function
