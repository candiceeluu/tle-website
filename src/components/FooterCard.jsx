function FooterCard({
    title,
    description,
    buttonText = "",
    buttonLink
}) {
    const button = (buttonText == "") ? <div></div> : <button className="button black-trans-btn">{buttonText}</button>;
    return (
        <>
        <div className="flex-column align-center justify-center center-text my-4 p-2">
            <h3>{title}</h3>
            <p className="mt-1">{description}</p>
            <a href={buttonLink} target="_blank" className="mt-2">{button}</a>
        </div>
        </>
    )
}

export default FooterCard