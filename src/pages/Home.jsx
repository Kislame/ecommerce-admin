import Featuredinfo from '../components/Featuredinfo';
import Chart from '../components/Chart';
import Widgetsmall from '../components/Widgetsmall';
import Widgetlg from '../components/Widgetlg';
import { useEffect, useState } from 'react';
import { useMemo } from 'react';

import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
  const [userStats, setUserStats] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const userRequest = useAxiosPrivate();
  const Months = useMemo(
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
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getStats = async () => {
      try {
        const res = await userRequest('/user/stats', {
          signal: controller.signal,
        });
        res.data.map((item) => {
          isMounted &&
            setUserStats((prev) => [
              ...prev,
              {
                name: Months[item._id - 1],
                'Active User': item.total,
              },
            ]);
        });
      } catch (err) {
        console.error(err);
        navigate('/login', { state: { from: location }, replace: true });
      }
    };

    getStats();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [Months]);
  return (
    <div>
      <Featuredinfo />
      <section className="grid grid-cols-1">
        <Chart
          title={'User Anaytics'}
          data={userStats}
          dataKey={'Active User'}
        />
      </section>
      <div className="lg:flex mt-8">
        <Widgetsmall />
        <Widgetlg />
      </div>
    </div>
  );
}

export default Home;
