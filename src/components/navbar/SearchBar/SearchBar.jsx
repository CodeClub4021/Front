import React from "react";

const SearchBar = () => {
    const submitHandler = (e) => {
        e.preventDefault();
    //     api to search
    };

    return (
        <form className="search-bar hidden sm:inline-block" onSubmit={submitHandler}>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search..."
                    className="placeholder-right rounded-full border border-gray-500 bg-gray-900 p-2 pl-11 pr-4 text-left text-gray-200 placeholder:text-zinc-200"
                    required={true}
                />
                <span className="absolute inset-y-0 left-3 mr-3 flex w-7 cursor-pointer items-center text-white"
                      onClick={submitHandler}>
          <i className="fas fa-search text-white-400"></i>
        </span>
            </div>
        </form>
    );
};

export default SearchBar;
