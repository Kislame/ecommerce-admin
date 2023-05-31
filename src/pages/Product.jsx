import { Link, useParams } from 'react-router-dom';
import Chart from '../components/Chart';
import Avatar from '../components/Avatar';

import { useState, useMemo, useEffect } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useLocation, useNavigate } from 'react-router-dom';

function ProductOverview() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const userRequest = useAxiosPrivate();
  const [pStats, setPStats] = useState([]);
  const [inputs, setInputs] = useState({});
  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  async function handleClick(e) {
    e.preventDefault();
    const { _id, ...others } = product;

    const updatedProduct = {
      ...others,
      ...inputs,
    };
    try {
      const res = await userRequest.put(`/product/${_id}`, updatedProduct);
      setProduct(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getProducts = async () => {
      try {
        const res = await userRequest('/product/' + id, {
          signal: controller.signal,
        });
        isMounted && setProduct(res.data);
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
  }, [id]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getStats = async () => {
      try {
        const res = await userRequest.get('/order/income?pid=' + id, {
          signal: controller.signal,
        });
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map(
          (item) =>
            isMounted &&
            setPStats((prev) => [
              ...prev,
              { name: MONTHS[item._id - 1], Sales: item.total },
            ])
        );
      } catch (err) {
        console.log(err);
        navigate('/login', { state: { from: location }, replace: true });
      }
    };
    getStats();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [id, MONTHS]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="md:text-3xl text-xl font-semibold">Edit Product</h1>
        <Link
          to="/dashboard/newProduct"
          className="btn-sm sm:btn sm:btn-primary sm:btn-outline btn btn-primary btn-outline"
        >
          Create
        </Link>
      </div>
      {product && (
        <main>
          <section className="  grid lg:grid-cols-2 grid-cols-1 gap-10">
            <Chart title={'Sales Perfomance'} data={pStats} datakey={'Sales'} />
            <div className="shadow-md  flex flex-col justify-center p-6 gap-4 ">
              <div className="flex flex-col  items-center gap-4">
                <Avatar size={'large'} img={product.img} />
                <h3 className=" md:text-lg  text-md font-semibold">
                  {product.title}
                </h3>
              </div>

              <dev className="space-x-6">
                <span>Id:</span>
                <span className="text-gray-500">{product._id}</span>
              </dev>
              <div className="space-x-6">
                <span>Sale:</span>
                <span className="text-gray-500">233</span>
              </div>
              <div className="space-x-6">
                <span>Active:</span>
                <span className="text-gray-500">yes</span>
              </div>
              <div className="space-x-6">
                <span>In stock:</span>
                <span className="text-gray-500">
                  {product.inStock && 'true'}
                </span>
              </div>
            </div>
          </section>
          <section className="shadow-md mt-8 lg:p-6  p-3">
            <form
              className="grid md:grid-cols-2 grid-cols-1 gap-4"
              id="product-update"
            >
              <div className="flex flex-col gap-6">
                <label className="text-slate-700 font-medium sm:text-lg text-base">
                  Product Name
                  <input
                    onChange={handleChange}
                    type="text"
                    name="productName"
                    placeholder={product.title}
                    className="block  w-full mt-2 border-2 py-1 px-2  text-slate-500 font-semibold sm:text-lg text-base  border-slate-300 rounded-md  placeholder-slate-400 md:placeholder:font-medium  placeholder:text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600"
                  />
                </label>
                <label className="text-slate-700 font-medium sm:text-lg text-base">
                  Price
                  <input
                    onChange={handleChange}
                    type="number"
                    name="price"
                    placeholder={product.price}
                    className="block  w-full mt-2 border-2 py-1 px-2  text-slate-500 font-semibold sm:text-lg text-base  border-slate-300 rounded-md  placeholder-slate-400 md:placeholder:font-medium  placeholder:text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600"
                  />
                </label>

                <label htmlFor="inStock" className="">
                  In Stock:
                  <select
                    onChange={handleChange}
                    name="inStock"
                    id="inStock"
                    className="py-2 px-3 cursor-pointer font-medium  text-lg ml-3 bg-inherit border border-slate-400"
                  >
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                  </select>
                </label>
              </div>
              <div className="flex  flex-col items-center gap-6">
                <div className="flex  flex-col items-center gap-6 mt-4">
                  <div>
                    <Avatar size={'large'} img={product.img} />
                  </div>
                  <label htmlFor="image">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-12 h-12 fill-secondary cursor-pointer"
                    >
                      <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                      <path
                        fillRule="evenodd"
                        d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="file"
                      className="hidden"
                      id="image"
                      name="image"
                    />
                  </label>
                </div>
                <button
                  onClick={handleClick}
                  className=" btn-sm sm:btn sm:btn-primary btn-primary btn"
                >
                  Update
                </button>
              </div>
            </form>
          </section>
        </main>
      )}
    </div>
  );
}

export default ProductOverview;
