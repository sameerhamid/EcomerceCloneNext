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
                type={props.type}
                error={props.error}
                label={props?.type !== "date" ? props.label : null}
                defaultValue={props.value}
                onChange={e => props.handleChange(e.target.value)}
                placeholder={props.placeholder}
                className='text_field'
            />
            {props.error && <span>{props.errorMesage}</span>}
        </div>
    )
}

export default Input
