const SelectNumber = ({begin, end, label, name, value, setValue}) => {
    const allOptions = [];
    for (let i = begin; i <= end; ++i)
        allOptions.push(<option value={i}>{i}</option>)

    const changeHandler = e => {
        setValue(prevData => ({
            ...prevData, [name]: e.target.value,
        }));
    }
    return (
        <label className="block text-lg font-medium text-amber-400 capitalize">
            {label}
            <select className="select select-bordered w-full bg-neutral-800 text-yellow-500 mt-1 focus:outline-yellow-500" value={value} onChange={changeHandler}>
                {allOptions}
            </select>
        </label>
    )
}

export default SelectNumber;