import Tag from "./Tag.jsx"
function MathPrepCard({
    title,
    grade,
    gradeColorClass,
    dates,
    requirements,
    bulletPointOne,
    bulletPointTwo,
    bulletPointThree,
    image,
    isComingSoon
}) {

    const bgColor = (isComingSoon) ? "bg-black" : "bg-white";
    const fontColor = (isComingSoon) ? "white-text" : "black-text";
    const buttons = (isComingSoon) ? (
        <button className="button red-trans-btn">Coming Soon</button>
    ) : ( 
    <>
        <button className="bg-dark-green button white-text">Register</button>
        <button className="button">Learn More</button> 
    </>
    )

    return (
        <>
        <div className={`${bgColor} ${fontColor} border-radius-2 p-3 w-full border-box`} style={{filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5))"}}>
            <div className="flex space-between">
                <h3>{title}</h3>
                <Tag text={grade} backgroundClass={gradeColorClass}/>
            </div>
            <div className="flex-column align-center gap-4 mt-2 lg-nav-flex-row-reverse ">
                <div className="w-full">
                    <p><span className="bold-text">Dates: </span>{dates}</p>
                    <p className="mt-1"><span className="bold-text">Requirements: </span>{requirements}</p>
                    <ul className="check-bullets">
                        <li>{bulletPointOne}</li>
                        <li>{bulletPointTwo}</li>
                        <li>{bulletPointThree}</li>
                    </ul>
                    <div className="mt-2 flex justify-center gap-1">
                        {buttons}
                    </div>
                </div>
                <div style={{width: "40%"}}>
                    <img src={image} className="w-full h-full cover"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default MathPrepCard