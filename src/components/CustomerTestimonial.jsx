function CustomerTestimonial({
    text,
    caption
}) {
    return (
        <>
        <div style={{backgroundColor:"#FFFDFA", position: "relative"}}
            className="border-radius-2 p-3 border-box flex-column align-center">
            <img className="absolute" 
                style={{width: "5rem", top: 0, left: "50%", transform: "translate(-50%, -50%)"}}
                src="/icons/bean-smile-face.svg" />
            <div className="">
                <img style={{width: "3rem"}} src="/icons/quote.svg" />
                <h3 className="mt-1">{text}</h3>
                <p className="mt-3">{caption}</p>
            </div>
        </div>
        </>
    )
}

export default CustomerTestimonial