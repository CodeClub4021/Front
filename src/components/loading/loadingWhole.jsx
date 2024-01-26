const LoadingWhole = () => {
    return(
        <div className="fixed top-0 bottom-0 left-0 right-0 opacity-60 bg-gray-400 flex justify-center place-items-center z-50">
            <span className="loading loading-bars absolute top-1/4 bg-gray-800 w-20"></span>
        </div>
    )
}

export default LoadingWhole;