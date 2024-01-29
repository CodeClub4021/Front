const TextArea = ({placeHolder, name, value, setValue}) => {
    const changeHandler = e => {
        setValue(prevData => ({
            ...prevData, [name]: e.target.value
        }));
        console.log(value)
    }
    return (
        <label className="text-lg font-medium text-amber-400 capitalize flex flex-col place-items-center gap-2">
        <span className="flex justify-start w-full">
                {placeHolder}
            </span>
            <textarea placeholder={placeHolder} value={value} onChange={changeHandler}
                      className="textarea bg-neutral-800 text-white textarea-bordered textarea-lg w-full py-2 px-3   overflow-y-scroll h-[15vh] max-h-[15vh] min-h-[15vh] focus:outline-yellow-500"></textarea>
        </label>
    )
}

export default TextArea;