const createToken = () => {
    return 'Token ' + localStorage.getItem("token");
}

export default createToken;