import { Checkbox } from '@mui/material'
import React from 'react'

const MyCheckbox = (props) => {
    // console.log(props.defaultChecked);

    return (
        <div className='checkbox_container'>
            <Checkbox defaultChecked={props.defaultChecked} label={props.label} onChange={props.handleChange} value={props.value} />
            {/* <input
                type={props.type}
                value={props.value}
                onChange={e => props.handleChange(e.target.value)}
                placeholder={props.placeholder}
                defaultChecked={props.defaultChecked}
            /> */}
            <label>{props.label}</label>
        </div>
    )
}

export default MyCheckbox
