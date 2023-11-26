import React from 'react';

const Button = ({ label, onClick }) => {
    return (
        <button
            className="bg-yellow-500 hover:bg-amber-300 capitalize text-gray-800 font-bold py-2 px-4 rounded-full transition-all"
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;