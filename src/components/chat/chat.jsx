import Header from "./header.jsx";
import {useLocation} from "react-router-dom";
import {faAngleRight, faX} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import avatar from "../../assets/images/cards/1.jpg";
import Message from "./message.jsx";
import ImageButton from "./ImageButton.jsx";
import {useState} from "react";

const Chat = (props) => {
    const {id, name} = useLocation().state
    const [image, setImage] = useState(null);
    const handleSubmit = e => {
        console.log(4656)
    }
    return (<div id="chat" className="w-full h-full flex flex-col">
        <Header avatar={avatar} name={name}/>
        <div
            className="bg-gradient-to-br from-cyan-800 from-0% via-cyan-800 via-15% to-purple-950 basis-full flex flex-col gap-3 justify-start pb-2 px-2 max-h-[80vh] "
            id="chat_body">
            <div className="h-full px-2 flex flex-col justify-between overflow-y-scroll overflow-x-hidden">
                <div className="text-center w-full">
                        <span
                            className="badge badge-neutral capitalize border-none text-xl px-3 py-4 bg-gray-500 select-none">
                            start
                        </span>
                </div>
                <div className="flex flex-col-reverse ">
                    <Message isSneder={true} message={"sdgkjh"}/>
                    <Message isSneder={true} message={"sdgkjh"}/>
                    <Message isSneder={true} message={"sdgkjh"}/>
                    <Message isSneder={true} message={"sdgkjh"}/>
                    <Message isSneder={false} message={"sdgkjh"}/>
                    <Message isSneder={true} message={"sdgkjh"}/>
                    <Message isSneder={false} message={"sdgkjh"}/>
                    <Message isSneder={true} message={"sdgkjh"}/>
                    <Message isSneder={true} message={"sdgkjh"}/>
                    <Message isSneder={true} message={"sdgkjh"}/>
                    <Message isSneder={true} message={"sdgkjh"}/>
                    <Message isSneder={true} message={"sdgkjh"}/>
                    <Message isSneder={true} message={"sdgkjh"}/>
                    <Message isSneder={true} message={"sdgkjh"}/>
                    <Message isSneder={true} message={"sdgkjh"}/>
                    <Message isSneder={true} message={"sdgkjh"}/>
                    {/*<Message isSneder={true} message={"sdgkjh"}/>*/}
                    {/*<Message isSneder={true} message={"sdgkjh"}/>*/}
                    {/*<Message isSneder={false} message={"sdgkjh"}/>*/}
                </div>
            </div>
            <div className="flex flex-col justify-center gap-1 w-full">
                <div className={`w-full px-5 py-1 rounded-tl-2xl rounded-tr-2xl bg-blue-600 transition-all duration-1000 ${image? "visible opacity-100" : "hidden opacity-0"} flex justify-between`}>
                    <span className="w-fit capitalize ">
                        image selected...
                    </span>
                    <button onClick={() => setImage(null)}>
                        <FontAwesomeIcon icon={faX} className="text-[15px] text" />
                    </button>
                </div>
                <div className="join w-full gap-4">
                    <input className="input focus:outline-0 focus:border-none bg-gray-800 w-full rounded-3xl px-6"
                           placeholder="Text..." onKeyUp={handleSubmit}/>
                    {/*image*/}
                    <ImageButton setImage={setImage}/>
                    {/*send*/}
                    <button className="btn btn-accent rounded-[80px] " onClick={handleSubmit}>
                        <FontAwesomeIcon icon={faAngleRight} className="text-xl font-light"/>
                    </button>
                </div>
            </div>
        </div>
    </div>)
}

export default Chat;