import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-solid-svg-icons";
import {Flip, toast, ToastContainer} from "react-toastify";

const ImageButton = ({setImage}) => {
    const changeHandler = e => {
        const selectedFile = e.target.files[0];

        if (selectedFile && selectedFile.type.startsWith('image/'))
            setImage(selectedFile);
        else {
            toast.error("Selected file is not an image", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Flip,
            });
            e.target.value = ''; // Clear the file input
        }
    }
    return (
        <div>
            <label className="btn btn-info rounded-3xl flex justify-center place-items-center">
                <FontAwesomeIcon icon={faImage} className=""/>
                <input className="hidden" onChange={changeHandler} type="file"/>
            </label>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                limit={1}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Flip}
            />
        </div>
    )
}

export default ImageButton;