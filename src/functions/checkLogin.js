export const checkLogin = () => {
    return Boolean(localStorage.getItem("token"));
}