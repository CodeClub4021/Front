import {useEffect, useRef} from "react";

const LoadingWhole = () => {
    const dialog = useRef(null);
    useEffect(() => {
        dialog.current.showModal();
    }, []);
    return(
        <dialog ref={dialog} className="daisymodal daisymodal-bottom sm:daisymodal-middle z-50">
            <div className="absolute top-0 left-0 bottom-0 right-0 opacity-30 bg-gray-400 flex justify-center place-items-center" >
                <span className="daisyloading daisyloading-bars absolute top-1/4 bg-gray-800 w-20"></span>
            </div>
        </dialog>
    )
}

export default LoadingWhole;