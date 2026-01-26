import Tag from "./Tag"

function SummerProgramBox({
    title,
    tagText,
    tagColor,
    bulletStyle,
    bulletOne,
    bulletTwo,
    bulletThree,
    bulletFour,
    registerLink
}) {
    return (
        <>
        <div className='flex-column space-between bg-white border-radius-2 p-2 flex-1'>
            <div>
                <div className='flex space-between align-center'>
                    <h3>{title}</h3>
                    <Tag text={tagText} backgroundClass={tagColor}/>
                </div>
                <ul className={`${bulletStyle} mt-2`}>
                    <li className='mt-1'>{bulletOne}</li>
                    <li>{bulletTwo}</li>
                    <li>{bulletThree}</li>
                    <li>{bulletFour}</li>
                </ul>
            </div>
            <div className='flex space-between mt-2'>
                <a href="/documents/2025-summer-grade-school.pdf" target="_blank">
                    <button className='button black-trans-btn'>See Schedule</button>
                </a>
                <a href={registerLink} target="_blank">
                    <button className='button bg-green'>Register</button>
                </a>
            </div>
        </div>
        </>
    )
}

export default SummerProgramBox