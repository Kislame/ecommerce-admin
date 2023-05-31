import { useState, useEffect } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import Avatar from './Avatar';

function Widgetlg() {
  const [orders, setOrders] = useState([]);
  const userRequest = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getOrders = async () => {
      try {
        const response = await userRequest.get('/order', {
          signal: controller.signal,
        });
        isMounted && setOrders(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getOrders();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);
  const Button = ({ type }) => (
    <button
      className={`${
        type === 'Approved'
          ? ' btn-success'
          : type === 'Declined'
          ? 'btn-error'
          : 'btn-info'
      } py-1 px-2 rounded-md`}
    >
      {type}
    </button>
  );
  return (
    <div className="flex-[2] shadow-md rounded-xl p-5 ml-5 overflow-x-auto ">
      <h3 className="   md:text-lg  text-md font-semibold mb-6">
        Latest Transactions
      </h3>
      <table className="table border-spacing-5 w-full  ">
        <thead className="">
          <tr>
            <th className="text-left">Customer</th>
            <th className="text-left">Date</th>
            <th className="text-left">Amount</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="flex items-center space-x-3 pt-4">
              <Avatar />
              <span>Jhone Doe</span>
            </td>
            <td>2 Jun 2023</td>
            <td>$145.57</td>
            <td>
              <Button type="Approved" />
            </td>
          </tr>
          <tr>
            <td className="flex items-center space-x-3 pt-4">
              <Avatar />
              <span>Jhone Doe</span>
            </td>
            <td>2 Jun 2023</td>
            <td>$145.57</td>
            <td>
              <Button type="Declined" />
            </td>
          </tr>
          <tr>
            <td className="flex items-center space-x-3 pt-4">
              <Avatar />
              <span>Jhone Doe</span>
            </td>
            <td>2 Jun 2023</td>
            <td>$145.57</td>
            <td>
              <Button type="Pending" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Widgetlg;
