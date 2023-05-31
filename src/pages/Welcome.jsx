import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto h-screen flex flex-col items-center justify-center gap-12 ">
        <h1 className="text-3xl text-slate-600 font-semibold text-center">
          Admin Pannel
        </h1>
        <section className="space-x-4">
          <Link to="/login" className="text-lg text-sky-600">
            Login?
          </Link>
          <Link to="/register" className="text-lg text-sky-600">
            Register?
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Welcome;
