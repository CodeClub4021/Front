import axios from "axios";
import {useEffect, useRef, useState} from "react";
import LoadingWhole from "../../../../components/loading/loadingWhole.jsx";
import {useNavigate} from "react-router-dom";
import {Bounce, toast} from "react-toastify";

const DeleteModal = ({text, url, internalRoute, refresh, show, setShow, setRender}) => {
    const [isFetching, setIsFetching] = useState(false);
    const navigate = useNavigate();
    const modal = useRef(null);
    const clickHandler = async e => {
        e.preventDefault();
        try {
            setIsFetching(true);
            const res = await axios.delete(url);
            setIsFetching(false);
            console.log(res.data);
            if (refresh)
                window.location.reload();
            setShow(false);
            toast.success("done!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce
            });
            if (internalRoute === "")
                setRender(true);
            navigate(internalRoute);
        } catch (err) {
            setIsFetching(false);
            console.error(err);
            modal.current.close();
            toast.error("oops!!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
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