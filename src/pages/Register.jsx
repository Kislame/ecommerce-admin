import { useEffect, useState, useRef } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { puplicRequest } from '../requestMethods';
import Checkicon from '../assets/Checkicon';
import Loader from '../assets/Loader';

const UserRegex = /^[A-z][A-z0-9-_]{3,23}$/;
// eslint-disable-next-line no-useless-escape
const EmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
function Login() {
  const errRef = useRef();
  const [username, setUsername] = useState('');
  const [userValid, setValiduser] = useState(false);
  const [userFocus, setuserFocus] = useState(false);

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
  const [success, setSuccess] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();
    const v1 = UserRegex.test(username);
    const v2 = EmailRegex.test(email);
    const v3 = pwdRegex.test(password);
    if (!v1 || !v2 || !v3) {
      setErrMsg('invalid entry');
      return;
    }
    try {
      const response = await puplicRequest.post(
        '/user/register',
        JSON.stringify({ username, email, password })
      );

      setSuccess(true);
      setUsername('');
      setEmail('');
      setPassword('');
      setMatchPwd('');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
        setErrMsg('User Email Taken');
      } else {
        setErrMsg('Registration Failed');
      }
      errRef.current.focus();
    }
  }

  //check username
  useEffect(() => {
    setValiduser(UserRegex.test(username));
  }, [username]);
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

  return (
    <div className="container mx-auto  ">
      {success ? (
        <section className="flex items-center justify-center flex-col h-screen">
          <p className="text-slate-700 text-lg">Register Successfully</p>
          <Link to="/" className="text-lg text-primary underline w-fit">
            Sign In
          </Link>
        </section>
      ) : (
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
            onSubmit={handleRegister}
            //find the associated action in the route
          >
            <label
              htmlFor="username"
              className=" tracking-widest font-semibold text-slate-700 lg:text-lg flex items-center gap-2"
            >
              UserName
              <span>
                <Checkicon inputValid={userValid} />
                <Loader inputValid={userValid} input={username} />
              </span>
            </label>
            <input
              autoFocus={true}
              autoComplete={'off'}
              aria-invalid={userValid ? 'false' : 'true'}
              aria-describedby="userId"
              required
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setuserFocus(true)}
              onBlur={() => setuserFocus(false)}
              type="text"
              name="username"
              id="username"
              className=" tracking-widest  my-4 block w-full px-3 py-2 bg-white border border-slate-400 rounded-md md:text-lg font-semibold text-slate-700 shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
            <p
              id="userId"
              className={`${
                userFocus && username && !userValid
                  ? 'relative -bottom-2 text-white text-sm bg-slate-800 p-2 rounded-md'
                  : 'sr-only'
              }`}
            >
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
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
              disabled={
                !username || !emailValid || !pwdValid || !validMatch
                  ? true
                  : false
              }
              className={`mt-8 btn btn-primary w-full`}
            >
              Sign Up
            </button>
          </form>
          <p className="my-4">Already Have Account ? </p>
          <Link to="/" className="text-lg text-primary underline w-fit">
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
}

export default Login;
