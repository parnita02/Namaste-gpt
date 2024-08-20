import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BG_URL } from "../utils/Constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handlelogIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "- " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "- " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute h-full w-full">
        <img className="w-full h-full object-cover" src={BG_URL} alt="bg" />
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
