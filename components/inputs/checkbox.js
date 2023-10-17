import React from 'react'

const Checkbox = (props) => {
    return (
        <div className='checkbox_container'>
            <input
                type={props.type}
                value={props.value}
                onChange={e => props.handleChange(e.target.value)}
                placeholder={props.placeholder}
                defaultChecked={props.defaultChecked}
            />
            <label>{props.label}</label>
        </div>
    )
}

export default Checkbox
