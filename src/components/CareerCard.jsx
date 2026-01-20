function CareerCard({
    position,
    description,
}) {
    return (
        <div style={{width: "300px"}} className="bg-sky-blue border-radius-2 p-2 w-fit-content flex-column space-between">
            <h3>{position}</h3>
            <p className="mt-1">{description}</p>
            <div className="flex-row-reverse mt-2">
                <button className='button black-trans-btn flex-end'>Apply Now</button>
            </div>
        </div>
    )
}

export default CareerCard