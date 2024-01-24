import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Header = ({avatar, name}) => {
    return (
        <div className="bg-gray-800 w-full h-fit border-b-2 flex justify-start place-items-center pb-1">
            <Link to={"/user/my-coaches"} className="btn bg-gray-800 border-none flex justify-center place-items-center pt-5 rounded-none h-full transition ease-in-out duration-200 hover:bg-gray-700">
                <FontAwesomeIcon icon={faArrowLeft} className="text-white text-2xl font-light"/>
            </Link>

            <div className="px-2 pt-3 ml-4 flex justify-between place-items-center gap-6">
                <img src={avatar} alt="avatar" className="rounded-3xl h-16"/>
                <span className="text-accent capitalize">
                    {name}
                </span>
            </div>
            {/*    put video call here    */}
        </div>
    )
}

export default Header;