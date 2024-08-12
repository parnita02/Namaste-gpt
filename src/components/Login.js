import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handlelogIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    // validate

    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current.value
    );
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute h-[100vh] w-[100vw]">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg"
          alt="bg"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-[#000000be] flex flex-col w-96 py-7 gap-5 my-28 mx-auto right-0 left-0 px-5"
      >
        <h1 className="text-white text-3xl font-bold mx-5 py-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 text-white mx-5 bg-transparent text-sm font-semibold rounded-md border border-gray-500"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email ID"
          className="p-3 text-white mx-5 bg-transparent text-sm font-semibold rounded-md border border-gray-500"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 text-white mx-5 bg-transparent text-sm font-semibold rounded-md border border-gray-500"
        />
        <p className="text-red-600 ml-6 font-extralight text-xs">
          {errorMessage}
        </p>
        <button
          className="text-white text-sm py-[0.6rem] font-semibold bg-red-600 mx-5 rounded-md hover:bg-red-700 hover:scale-105"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h3 className="text-gray-300 mx-auto text-sm">OR</h3>
        <p className="text-gray-300 mx-7">
          {isSignInForm ? "New to Netflix? " : "Already a user? "}
          <span
            onClick={handlelogIn}
            className="text-white font-semibold cursor-pointer "
          >
            {isSignInForm ? "Sign Up Now" : "Sign In Now"}.
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
