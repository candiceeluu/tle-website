function CustomerTestimonial({
    text,
    caption
}) {
    return (
        <>
        <div style={{backgroundColor:"#FFFDFA", position: "relative"}}
            className="border-radius-2 p-3 border-box flex-column align-center flex-1">
            <img className="absolute" 
                style={{width: "5rem", top: 0, left: "50%", transform: "translate(-50%, -50%)"}}
                src="/icons/bean-smile-face.svg" />
            <div className="flex-column space-between h-full">
                <div>
                    <img style={{width: "3rem"}} src="/icons/quote.svg" />
                    <h4 className="mt-1">{text}</h4>
                </div>
                <p className="mt-3">{caption}</p>
            </div>
        </div>
        </>
    )
}

export default CustomerTestimonial