import { TextField } from '@mui/material'
import React from 'react'

const Input = (props) => {
    return (
        <div className='input_container'>
            <label>{props.label}</label>
            {/* <input
                type={props.type}
                value={props.value}
                onChange={e => props.handleChange(e.target.value)}
                placeholder={props.placeholder}
            /> */}

            <TextField
                error={props.error}
                label={props.label}
                defaultValue={props.value}
                onChange={e => props.handleChange(e.target.value)}
                placeholder={props.placeholder}
                className='text_field'
            />
        </div>
    )
}

export default Input
