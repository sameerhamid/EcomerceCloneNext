import { MenuItem, Select } from '@mui/material'
import { options } from 'less'
import React from 'react'


const Selector = (props) => {
    return (
        <div className='selector_container'>
            <label>{props.label}</label>
            {/* <select
                onChange={(e) => props.handleChange(e.target.value)} value={props.gender}>
            </select> */}
            <Select
                className='selector'
                value={props.gender}
                onChange={(e) => props.handleChange(e.target.value)}
            >
                {props.genderOptions?.map((option, key) => (
                    <MenuItem key={key} value={option.gender}>
                        {option.gender}
                    </MenuItem>
                ))}
            </Select>
        </div>
    )
}

export default Selector
