import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const Navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        Navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <div className="absolute w-full h-1/6 xl:px-[10rem] px-5 py-4 bg-gradient-to-b from-black z-10">
      <div className="flex justify-between">
        <img
          className="lg:w-44 w-28 "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />

        <div>
          <button
            onClick={handleSignOut}
            className="bg-black text-white py-1 px-1.5 rounded-md"
          >
            {user ? "sign Out" : "sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
