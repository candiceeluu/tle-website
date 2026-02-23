function CareerCard({
    position,
    description,
}) {
    const email = "elu.tle@gmail.com"
    const subject = encodeURIComponent("Position Inquiry")
    const body = encodeURIComponent("[Please attach your name and resume to this email.]")
    return (
        <div style={{width: "300px"}} className="bg-sky-blue border-radius-2 p-2 w-fit-content flex-column space-between">
            <h3>{position}</h3>
            <p className="mt-1">{description}</p>
            <a href={`mailto:${email}?subject=${position}%20${subject}&body=${body}`}
                className="flex-row-reverse mt-2">
                <button className='button black-trans-btn flex-end'>Apply Now</button>
            </a>
        </div>
    )
}

export default CareerCard