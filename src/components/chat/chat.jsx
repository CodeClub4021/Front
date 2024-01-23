import Header from "./header/header.jsx";
import {useLocation} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import avatar from "../../assets/images/cards/1.jpg";
const Chat = (props) => {
    const location = useLocation()
    return (
        <div className="h-full w-full">
            <Header avatar={avatar} name={location.state.name} />
            <div>
            {/*  messages  */}
            </div>
            <div>
            {/*  typing field  */}
            </div>
        </div>
    )
}

export default Chat;