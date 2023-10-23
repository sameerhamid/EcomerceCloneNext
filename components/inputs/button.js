import React from 'react'

const Button = ({ btnText, btnColor, textcolor, onClick }) => {
    return (
        <button className='my_btn' onClick={onClick} style={{ background: `#${btnColor}`, color: `#${textcolor}` }} > {btnText}</ button>
    )
}

export default Button
