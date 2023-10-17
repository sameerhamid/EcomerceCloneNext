import React from 'react'

const Input = (props) => {
    return (
        <div className='input_container'>
            <label>{props.label}</label>
            <input
                type={props.type}
                value={props.value}
                onChange={e => props.handleChange(e.target.value)}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Input
