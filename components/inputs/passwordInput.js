import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
const PasswordInput = (props) => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (

        <div className='password_wrapper'>
            <label>{props.label}</label>


            <FormControl >
                <InputLabel htmlFor="outlined-adornment-password">{props.label}</InputLabel>
                <OutlinedInput
                    className='outlined_input'
                    type={showPassword ? 'text' : 'password'}
                    error={props.error}
                    defaultValue={props.value}
                    onChange={e => props.handleChange(e.target.value)}
                    placeholder={props.placeholder}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {showPassword ? < MdVisibility /> : <MdVisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label={props.label}
                />
                {props.error && <span>{props.errorMesage}</span>}
            </FormControl>
        </div>


    )
}

export default PasswordInput
