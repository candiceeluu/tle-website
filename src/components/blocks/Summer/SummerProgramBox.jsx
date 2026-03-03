import Tag from "../../ui/Tag"

function SummerProgramBox({
    title,
    tagText,
    tagColor,
    bulletStyle,
    bulletOne,
    bulletTwo,
    bulletThree,
    bulletFour,
    registerLink,
    grade
}) {

    const highSchoolSchedule = "/documents/2026-summer-high-school.pdf"
    const gradeSchoolSchedule = "/documents/2026-summer-grade-school.pdf"
    const schedule = (grade == "HS") ? highSchoolSchedule : gradeSchoolSchedule

    return (
        <>
        <div className='flex flex-col justify-between bg-secondary rounded-2xl p-10 relative'>
            <div>
                <div className='flex justify-between items-center'>
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
            <div className='flex justify-between mt-2'>
                <a href={schedule} target="_blank">
                    <button className="border-black">See Schedule</button>
                </a>
                <a href={registerLink} target="_blank">
                    <button className='bg-green'>Register</button>
                </a>
            </div>
        </div>
        </>
    )
}

export default SummerProgramBox