import React from 'react'

const Button = ({ btnText, btnColor, textcolor }) => {
    return (
        <button className='my_btn' style={{ background: `#${btnColor}`, color: `#${textcolor}` }} > {btnText}</ button>
    )
}

export default Button
