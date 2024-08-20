import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGO_URL } from "../utils/Constants";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="absolute w-full h-1/6 xl:px-[10rem] px-5 py-4 bg-gradient-to-b from-black z-10">
      <div className="flex justify-between">
        <img className="lg:w-44 w-28 " src={LOGO_URL} alt="logo" />

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
