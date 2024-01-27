const RadioInput = ({label, values, name, value, setValue}) => {
    const changeHandler = e => {
        console.log(1)
        setValue(prevData => ({
            ...prevData, [name]: e.target.getAttribute("data-item")
        }));
        console.log(value);
    }
    console.log(value);
    return(
        <label className="text-lg font-medium text-amber-400 capitalize">
            {label}
            <div className="flex justify-between pt-2">
                {
                    values.map((val, index) => {
                        let isChecked = false;
                        if (val === value)
                            isChecked = true;
                        return (
                            <label className="text-white flex gap-1 place-items-center cursor-pointer" key={index}>
                                {val}
                                <input type="radio" name={name} data-item={val} onChange={changeHandler} className="radio radio-warning" checked={isChecked}/>
                            </label>
                        )
                    })
                }
            </div>
        </label>
    )
}

export default RadioInput;