import Header from "./header/header.jsx";
import {useLocation} from "react-router-dom";
import {faAngleRight, faImage} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import avatar from "../../assets/images/cards/1.jpg";
const Chat = (props) => {
    const {id, name} = useLocation().state
    const handleSubmit = e => {
        console.log(4656)
    }
    const handleUplaodImage = e => {

    }
    return (
        <div className="h-[98%] w-full bg-black absolute pv-100 flex flex-col justify-start">
            <Header avatar={avatar} name={name} />
            <div className="bg-gradient-to-br from-cyan-800 from-0% via-cyan-800 via-15% to-purple-950  h-full flex flex-col justify-start pb-1">
                <div className="h-full basis-full">
                    {/*  messages  */}
                </div>
                <div className="flex justify-center w-full px-2">
                    <div className="join w-full gap-4">
                        <input className="input focus:outline-0 focus:border-none bg-gray-800 w-full rounded-3xl px-6" placeholder="Text..." onKeyUp={handleSubmit}/>
                        {/*image*/}
                        <button className="btn btn-info rounded-3xl " onClick={handleUplaodImage}>
                            <FontAwesomeIcon icon={faImage} className=""/>
                        </button>
                        {/*send*/}
                        <button className="btn btn-accent rounded-[80px] " onClick={handleSubmit}>
                            <FontAwesomeIcon icon={faAngleRight} className="text-xl font-light"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;