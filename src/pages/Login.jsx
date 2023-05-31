import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import Checkicon from '../assets/Checkicon';
import Loader from '../assets/Loader';
import useAuth from '../hooks/useAuth';
import { puplicRequest } from '../requestMethods';

// eslint-disable-next-line no-useless-escape
const EmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
function Login() {
  const { setAuth, persist, setPersist } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/dashboard/';

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [emailValid, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [pwdValid, setValidpwd] = useState(false);
  const [pwdFocus, setpwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');

  async function handleLogin(event) {
    event.preventDefault();
    const v1 = EmailRegex.test(email);
    const v2 = pwdRegex.test(password);
    if (!v1 || !v2) {
      setErrMsg('invalid entry');
      return;
    }
    try {
      const res = await puplicRequest.post(
        '/auth/',
        JSON.stringify({ email, password })
      );
      const accessToken = res?.data?.accessToken;
      const user = res?.data.user;

      setAuth({ user, accessToken });
      setEmail('');
      setPassword('');
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg('NO SERVER RESPONSE');
      } else if (err.response?.status === 400) {
        setErrMsg('Invalid email or password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('login failed');
      }
      errRef.current.focus();
    }
  }
  //put focus on first input
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  //check if email is valid if so set email valid state to true.
  useEffect(() => {
    setValidEmail(EmailRegex.test(email));
  }, [email]);

  //check if password is valid and check if password matchs confirm pwd.
  useEffect(() => {
    setValidpwd(pwdRegex.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd]);

  //clear error message on user input change.
  useEffect(() => {
    setErrMsg('');
  }, [email, password, matchPwd]);

  const togglePersist = () => {
    setPersist(!persist);
  };

  useEffect(() => {
    localStorage.setItem('persist', persist);
  }, [persist]);

  return (
    <main className="container mx-auto  ">
      <div className=" mx-auto min-h-screen grid grid-cols-1 max-w-sm min-w-fit content-center  md:place-items-stretch place-items-center ">
        <p
          ref={errRef}
          aria-live={'assertive'}
          className={`${
            errMsg
              ? 'text-red-500 font-semibold bg-red-200 p-2 mb-3 '
              : 'sr-only'
          }`}
        >
          {errMsg}
        </p>

        <form
          onSubmit={handleLogin}

          //find the associated action in the route
        >
          <label
            htmlFor="email"
            className=" tracking-widest font-semibold text-slate-700 lg:text-lg flex items-center gap-2"
          >
            Email
            <span>
              <Checkicon inputValid={emailValid} />
              <Loader inputValid={emailValid} input={email} />
            </span>
          </label>
          <input
            ref={emailRef}
            autoComplete={'off'}
            aria-invalid={emailValid ? 'false' : 'true'}
            aria-describedby="eId"
            required
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            type="email"
            name="email"
            id="email"
            value={email}
            className=" tracking-widest  my-4 block w-full px-3 py-2 bg-white border border-slate-400 rounded-md md:text-lg font-semibold text-slate-700 shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
          <p
            id="eId"
            className={`${
              emailFocus && email && !emailValid
                ? 'relative -bottom-2 text-white text-sm bg-slate-800 p-2 rounded-md'
                : 'sr-only'
            }`}
          >
            must be a valid email
            <br />
            user@gmail.com ..ect
            <br />
          </p>
          <label
            htmlFor="password"
            className="font-semibold text-slate-700 lg:text-lg flex items-center gap-2"
          >
            Password
            <span>
              <Checkicon inputValid={pwdValid} />
              <Loader inputValid={pwdValid} input={password} />
            </span>
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setpwdFocus(true)}
            onBlur={() => setpwdFocus(false)}
            aria-invalid={pwdValid ? 'false' : 'true'}
            aria-describedby="pwd"
            type="password"
            name="password"
            id="password"
            value={password}
            className=" my-4 block w-full px-3 py-2 bg-white border border-slate-400 rounded-md md:text-lg font-semibold text-slate-700 shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
          <p
            id="pwd"
            className={`${
              pwdFocus && !pwdValid
                ? 'relative -bottom-2 text-white text-sm bg-slate-800 p-2 rounded-md'
                : 'sr-only'
            }`}
          >
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters,
            <br />
            a number and a special character.
            <br />
            Allowed special characters:{' '}
            <span aria-label="exclamation mark">!</span>{' '}
            <span aria-label="at symbol">@</span>{' '}
            <span aria-label="hashtag">#</span>{' '}
            <span aria-label="percent">%</span>
          </p>
          <label
            htmlFor="confirm_pwd"
            className="font-semibold text-slate-700 lg:text-lg flex items-center gap-2"
          >
            Confirm Password
            <span>
              <Checkicon inputValid={validMatch && matchPwd} />
              <Loader inputValid={validMatch} input={matchPwd} />
            </span>
          </label>
          <input
            onChange={(e) => setMatchPwd(e.target.value)}
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
            aria-invalid={validMatch ? 'false' : 'true'}
            aria-describedby="cpwd"
            type="password"
            name="confirm_pwd"
            id="confirm_pwd"
            className=" my-4 block w-full px-3 py-2 bg-white border border-slate-400 rounded-md md:text-lg font-semibold text-slate-700 shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
          <p
            id="cpwd"
            className={`${
              matchFocus && !validMatch
                ? 'relative -bottom-2 text-white text-sm bg-slate-800 p-2 rounded-md'
                : 'sr-only'
            }`}
          >
            must match the first password input field.
          </p>

          <button
            disabled={!emailValid || !pwdValid || !validMatch ? true : false}
            className={`mt-8 w-full btn btn-primary`}
          >
            Sign In
          </button>
          <div className="my-3">
            <input
              className="mr-3 w-12 checked:bg-blue-500"
              type="checkbox"
              name="persist"
              id="persist"
              checked={persist}
              onChange={togglePersist}
            />
            <label htmlFor="persist" className="font-semibold">
              Trust this device ?
            </label>
          </div>
        </form>
        <p className="my-4 text-slate-700">You Dont Have Account ? </p>
        <Link to="/register" className="text-lg text-primary underline w-fit ">
          Sign Up
        </Link>
      </div>
    </main>
  );
}

export default Login;
