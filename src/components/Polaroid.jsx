function Polaroid({
    imageUrl,
    rotation="rotate(-5deg)",
    text,
    width="25rem"
}) {
    return (
        <>
        <div style={{transform: `${rotation}`, width:`${width}`, padding: '1rem'}}
            className="flex-column align-center bg-white overflow-hidden">
            <img style={{width: '100%', height: '100%', objectFit: 'cover'}} 
                src={imageUrl} />
            <p style={{}}
                className="black-text mt-1">{text}</p>
        </div>
        </>
    )
}

export default Polaroid