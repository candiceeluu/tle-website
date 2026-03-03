function HeroCard({
    title,
    description,
    buttonText,
    buttonLink = "",
    backgroundImage = "",
    target="_blank"
}) {
    
    const hasButton = (buttonLink == "") ? "none" : "block";
    const targetElement = document.getElementById({target})

    return (
        <>
        <div 
        aria-label="hero-card" 
        style={{backgroundImage: backgroundImage}}
        className="container mx-auto shadow-[inset_0_0_0_2000px_rgba(0,0,0,0.5)] p-10 bg-cover bg-center bg-no-repeat text-white lg:rounded-2xl lg:my-4">
            <h1 className="mt-2 lg-nav-mt-4">{title}</h1>
            <p className="mt-1">{description}</p>
            <a href={buttonLink} target={target} style={{display: hasButton}}>
                <button className="border-white mt-2">{buttonText}</button>
            </a> 
        </div>
        </>
    )
}

export default HeroCard