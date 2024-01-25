const Message = ({isSneder, message, isSuccessfull}) => {
    const classes = ["chat chat-end py-1", "chat-bubble chat-bubble-primary bg-amber-400 max-w-xs break-words"]
    if (!isSneder){
        classes[0] = "chat chat-start";
        classes[1] = "chat-bubble chat-bubble-primary bg-purple-500 text-amber-100 max-w-xs break-words";
    }
    return (
        <div className={classes[0]}>
            <div className={classes[1]}>
                {message}
            </div>
        </div>
    )
}

export default Message;