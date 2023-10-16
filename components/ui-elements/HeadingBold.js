const HeadingBold = ({ text, boldText, fontSize }) => {
    return <div className={`${fontSize} heading_text`}>{text} <span className="bold-text">{boldText}</span></div>
}

export default HeadingBold