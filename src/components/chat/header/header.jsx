import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Header = ({avatar, name}) => {
    return (
        <div className="bg-gray-800 w-full h-20 relative border-b-2 pb-1">
            <Link to={"/user/my-coaches"} className="btn bg-gray-800 border-none rounded-none h-full px-5 pt-4 absolute left-0 top-0 transition ease-in-out duration-200 hover:bg-gray-700">
                <FontAwesomeIcon icon={faArrowLeft} className="text-white text-2xl font-hairline"/>
            </Link>

            <div className="py-2 px-2 ml-4 absolute left-12 top-1 flex justify-between place-items-center gap-6">
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