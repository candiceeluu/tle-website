function Tag({
    text,
    textColorClass="white-text",
    paddingClass="p-08",
    backgroundClass
}) {
    return (
        <>
        <p className={`${backgroundClass} border-radius-2 ${paddingClass} ${textColorClass}`}>{text}</p>
        </>
    )
}

export default Tag