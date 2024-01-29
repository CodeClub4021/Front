import { useState } from "react";

const UserTypeCheckBox = ({ text, setValue }) => {
  const changeHandler = (e) => {
    setValue(text);
  };
  console.log(text);
  return (
    <div className="form-control bg-none">
      <label className="label flex cursor-pointer justify-between">
        <span className="label-text"> {text} </span>
        <input
          type="radio"
          name="radio-10"
          className="radio h-5 w-5 checked:bg-blue-500"
          value={text}
          onChange={changeHandler}
        />
      </label>
    </div>
  );
};

export default UserTypeCheckBox;
