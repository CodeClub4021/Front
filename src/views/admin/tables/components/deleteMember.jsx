import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import axios from "axios";
import DeleteModal from "./deleteModal.jsx";

const DeleteMember = ({userId, url, setRender}) => {
    const [show, setShow] = useState(false);
    return(
        <div>
            <FontAwesomeIcon icon={faX} className="text-red-500 w-full ml-[-30px] text-xl cursor-pointer ease-in-out duration-300 hover:scale-125" onClick={() => setShow(true)} />
            <DeleteModal show={show} setShow={setShow} refresh={false} setRender={setRender} internalRoute={""} url={url} text={"Are you sure?"} />
        </div>
    )
}

export default DeleteMember;