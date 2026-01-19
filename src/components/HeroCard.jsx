function HeroCard({
    title,
    description,
    buttonText,
    buttonLink,
    backgroundClass
}) {
    return (
        <>
        <div aria-label="hero-card" className="lg-nav-my-4">
            <div aria-label="hero-card-content" className={`${backgroundClass} bg-img bg-shading lg-nav-border-radius-2 max-width mx-auto border-box p-2 lg-nav-p-3 white-text`}>
                <h1 className="mt-2 lg-nav-mt-4">{title}</h1>
                <p className="mt-1">{description}</p>
                <a href={buttonLink} target="_blank">
                    <button className="button white-btn mt-1">{buttonText}</button>
                </a>
            </div>
        </div>
        </>
    )
}

export default HeroCard