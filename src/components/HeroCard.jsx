function HeroCard({
    title,
    description,
    buttonText,
    onButtonClick,
    backgroundClass
}) {
    return (
        <>
        <div aria-label="hero-card" className="">
            <div aria-label="hero-card-content" className={`${backgroundClass} bg-img bg-shading lg-nav-border-radius-2 max-width mx-auto border-box p-2 lg-nav-p-3 white-text`}>
                <h1 className="mt-2 lg-nav-mt-4">{title}</h1>
                <p className="mt-1">{description}</p>
                <button onClick={onButtonClick} className="button white-btn mt-1">{buttonText}</button>
            </div>
        </div>
        </>
    )
}

export default HeroCard