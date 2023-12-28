import {useState} from "react";

const UserTypeCheckBox = ({text, setValue}) => {
    const changeHandler = (e) => {
        setValue(text);
    }
    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text"> {text} </span>
                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" value={text}
                       onClick={changeHandler}/>
            </label>
        </div>

    )
}

export default UserTypeCheckBox;