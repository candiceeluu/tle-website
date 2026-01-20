

function ReviewBox({
    testimony,
    author,
    program
}) {
    return (
        <>
        <div className="bg-white border-radius-2 left-text p-2 border-box flex-column flex-1 space-between">
            <div>
                <img className="quote-icon" src="/icons/quote.svg" />
                <h4 className='mt-1'>{testimony}</h4>
            </div>
            <div className="flex-end">
                <p className="semibold-text mt-4">{author}</p>
                <p className=''>{program}</p>
            </div>
        </div>
        </>
    )
}

export default ReviewBox