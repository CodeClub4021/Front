import axios from "axios";
import {useContext, useEffect, useRef, useState} from "react";
import LoadingWhole from "../../../../components/loading/loadingWhole.jsx";
import {useNavigate} from "react-router-dom";
import {errorToast} from "../../../../functions/myToast.js";
import createToken from "../../../../axiosConfig/createToken.js";
import {UserContext} from "../../../../contexts.jsx";

const DeleteModal = ({text, url, internalRoute, refresh, show, setShow, setRender}) => {
    const [isFetching, setIsFetching] = useState(false);
    const navigate = useNavigate();
    const modal = useRef(null);
    const [gymIds] = useContext(UserContext);

    const clickHandler = async e => {
        e.preventDefault();
        try {
            setIsFetching(true);
            const res = await axios.delete(url, {
                headers: {
                    Authorization: createToken()
                }
            });
            setIsFetching(false);
            console.log(res.data);
            if (refresh)
                window.location.reload();
            setShow(false);
            if (internalRoute === "" && !refresh)
                setRender(true);
            if (refresh){
            //     delete gymId from context
            }
            navigate(internalRoute);
        } catch (err) {
            setIsFetching(false);
            console.error(err);
            errorToast("oops!!");
            modal.current.close();
        }
    }
    useEffect(() => {
        if (show)
            modal.current.showModal();

        window.addEventListener("keydown", e => {
            if (e.key === "Escape")
                setShow(false);
        });

        () => window.removeEventListener("keydown");
    });
    return (
        <div>
            <dialog ref={modal} className="daisymodal daisymodal-bottom sm:daisymodal-middle">
                <div className="daisymodal-box bg-gray-900 flex flex-col place-items-center">
                    <h1 className="py-4 text-white font-light text-2xl">
                        {text}
                    </h1>
                    <div className="daisymodal-action">
                        <form method="dialog" className="flex justify-between gap-5">
                            <button className="daisybtn px-8 daisybtn-error capitalize" onClick={() => setShow(false)}>no</button>
                            <button className="daisybtn px-8 daisybtn-accent capitalize" onClick={clickHandler}>yes</button>
                        </form>
                    </div>
                </div>
            </dialog>
            {isFetching && <LoadingWhole/>}
        </div>
    )
}

export default DeleteModal;