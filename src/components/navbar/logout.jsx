import { useNavigate } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";

const Logout = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/home");
  };
  return (
    <button
      onClick={clickHandler}
      className="flex place-items-center justify-start gap-2 whitespace-nowrap pr-3 capitalize duration-300 ease-in-out hover:scale-105"
    >
      log out
      <FaPowerOff className="text-3xl text-red-500" />
    </button>
  );
};

export default Logout;
