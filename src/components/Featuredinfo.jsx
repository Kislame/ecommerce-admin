import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

function Featuredinfo() {
  const userRequest = useAxiosPrivate();
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);
  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get('/order/income');
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch (error) {}
    };
    getIncome();
  }, []);

  return (
    <div className="flex  lg:flex-row  lg:justify-between  flex-col   justify-center  gap-8">
      <div className="p-7 shadow-md rounded-xl bg-primary-content flex-1">
        <span className="lg:text-xl  text-lg font-semibold tracking-wide">
          Revenue
        </span>
        <div className="flex my-3 items-center">
          <span className="font-semibold text-3xl">$8</span>
          <span className="flex ml-5 text-lg items-center">
            -11.4{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 fill-red-600"
            >
              <path
                fillRule="evenodd"
                d="M10 2a.75.75 0 01.75.75v12.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 111.1-1.02l1.95 2.1V2.75A.75.75 0 0110 2z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <span className="text-gray-500">Compared to last month</span>
      </div>
      <div className="p-7 shadow-md rounded-xl bg-primary-content flex-1">
        <span className="lg:text-xl  text-lg font-semibold tracking-wide">
          Sales
        </span>
        <div className="flex my-3 items-center">
          <span className="font-semibold text-3xl">$8</span>
          <span className="flex ml-5 text-lg items-center">
            $9.4{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 fill-red-600"
            >
              <path
                fillRule="evenodd"
                d="M10 2a.75.75 0 01.75.75v12.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 111.1-1.02l1.95 2.1V2.75A.75.75 0 0110 2z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <span className="text-gray-500">Compared to last month</span>
      </div>
      <div className="p-7 shadow-md rounded-xl bg-primary-content flex-1">
        <span className="lg:text-xl  text-lg font-semibold tracking-wide">
          Cost
        </span>
        <div className="flex my-3 items-center">
          <span className="font-semibold text-3xl">$8</span>
          <span className="flex ml-5 text-lg items-center">
            $9.4{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 fill-green-600"
            >
              <path
                fillRule="evenodd"
                d="M10 18a.75.75 0 01-.75-.75V4.66L7.3 6.76a.75.75 0 11-1.1-1.02l3.25-3.5a.75.75 0 011.1 0l3.25 3.5a.75.75 0 01-1.1 1.02l-1.95-2.1v12.59A.75.75 0 0110 18z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <span className="text-gray-500">Compared to last month</span>
      </div>
    </div>
  );
}

export default Featuredinfo;
