import Tag from "./Tag"
import { Link } from 'react-router-dom'
function GradeLevelCard({
    backgroundColor,
    title,
    description,
    image,
    tagText,
    tagStyle,
    buttonStyle,
    buttonLink
}) {

    return (
        <>
        <div className={`${backgroundColor} flex-column border-box border-radius-2 overflow-hidden lg-nav-flex-row-reverse`}>
            <div className="w-full h-180px lg-nav-w-50p lg-nav-h-auto">
                <img className="w-full h-full cover" src={image} />
            </div>
            <div className="p-2 lg-nav-p-3 lg-nav-w-50p flex-column">
                <div className="right-text w-full flex flex-end">
                    <div className="w-fit-content">
                        <Tag text={tagText} backgroundClass={tagStyle}/>
                    </div>
                </div>
                <h2 className="mt-1 lg-nav-mt-4">{title}</h2>
                <p className="lg-nav-mt-1">{description}</p>
                <Link to={buttonLink} className="w-fit-content h-fit-content">
                    <button className={`${buttonStyle} button mt-1 lg-nav-mt-4`}>Learn More</button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default GradeLevelCard