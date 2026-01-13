function CareerCard({
    position,
    description,
    caption
}) {
    return (
        <div style={{width: "300px"}} className="bg-sky-blue border-radius-2 p-2 w-fit-content">
            <h3>{position}</h3>
            <p>{description}</p>
            <div className="flex space-between mt-2">
                <p>{caption}</p>
                <button className='button black-trans-btn'>Apply Now</button>
            </div>
        </div>
    )
}

export default CareerCard