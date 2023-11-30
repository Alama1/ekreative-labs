const Service = ({ service }) => {
    const {className, imgSrc, iconClass, serviceText, textClass}  = service
    return (
        <div className={className}>
            <img className={iconClass} src={imgSrc} alt='Service image'/>
            <div className={textClass}>{serviceText}</div>
        </div>
    )
}

export default Service