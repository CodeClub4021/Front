export const handleCopy = (value, toastText) => {
  navigator.clipboard
    .writeText(value)
    .then(() => {
      toastText.length !== 0
        ? myToast.success(toastText)
        : myToast.success("متن با موفقیت کپی شد");
    })
    .catch((error) => myToast.success("مشکلی در کپی متن بوجود امد"));
};

export const setLocal = (key, value) => {
  return typeof window !== "undefined"
    ? localStorage.setItem(key, value)
    : undefined;
};

export const getLocal = (key) => {
  return typeof window !== "undefined"
    ? JSON.stringify(localStorage.getItem(key))?.replaceAll('"', "")
    : null;
};

export const removeLocal = (key) => {
  return typeof window !== "undefined"
    ? JSON.stringify(localStorage.removeItem(key))
    : undefined;
};

export const handleShowToast = (type, text) => {
  if (type === "success") {
    return (
      <div className="toast toast-center">
        <div className={`alert alert-success`}>
          <span style={{ color: "#fff" }}>{text}</span>
        </div>
      </div>
    );
  } else if (type === "error") {
    return (
      <div className="toast toast-center">
        <div className={`alert alert-error`}>
          <span style={{ color: "#fff" }}>{text}</span>
        </div>
      </div>
    );
  } else if (type === "info") {
    return (
      <div className="toast toast-center">
        <div className={`alert alert-info`}>
          <span style={{ color: "#fff" }}>{text}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="toast toast-center">
        <div className={`alert alert-info`}>
          <span style={{ color: "#fff" }}>{text}</span>
        </div>
      </div>
    );
  }
};
