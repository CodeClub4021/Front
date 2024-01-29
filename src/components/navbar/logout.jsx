import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPowerOff} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/home");
    }
    return(
        <button onClick={clickHandler} className="pr-3 flex place-items-center justify-start gap-2 capitalize whitespace-nowrap ease-in-out duration-300 hover:scale-105">
            log out
            <FontAwesomeIcon icon={faPowerOff} className="text-red-500 text-3xl" />
        </button>
    )
}

export default Logout;