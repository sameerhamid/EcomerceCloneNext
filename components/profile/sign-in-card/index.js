import { useState } from "react"
import Checkbox from "../../inputs/checkbox"
import Input from "../../inputs/input"
import Button from "../../inputs/button"
import { useSetRecoilState } from "recoil"
import { authState } from "../../../recoil/atoms/home"
import PasswordInput from "../../inputs/passwordInput"

export const SignInCard = () => {
    // const [emailOrPhnNum, setEmailOrPhnNum] = useState(null)
    // const [password, setPassword] = useState(null)
    const [inputText, setInputText] = useState(null)
    // const [passwordError, setPasswordError] = useState(null)
    const [checked, setChecked] = useState(true)

    const changeAuth = useSetRecoilState(authState)

    const validate = () => {
        if (!inputText?.email) {
            setInputText({ ...inputText, "emailError": true, emailErrorMessage: 'Email is required' })
            // return false
        } else if (!inputText?.password) {
            setInputText({ ...inputText, "passworError": true, passwordErrorMessage: 'Password is required' })
            // return false
        }

    }
    console.log(inputText);

    const handleSubmit = () => {
        if (validate())
            alert("hello")
    }

    const onTextChange = (value, type) => {
        setInputText({ ...inputText, [type]: value, [type + "Error"]: null })
    }

    console.log("***inputText", inputText)
    return (
        <div className="login_right_container">
            <Input label="Email or verified Mobile Number" placeholder="Email Or Mobile Number" type="text" value={inputText?.email} handleChange={val => onTextChange(val, "email")} error={inputText?.emailError} errorMesage={inputText?.emailErrorMessage} />
            {/* 
            <Input label="Password" placeholder="Password" type="password" value={password} handleChange={val => setPassword(val)} /> */}
            <PasswordInput label="Password" placeholder="Password" type="password" handleChange={val => onTextChange(val, "password")} value={inputText?.password} errorMesage={inputText?.passwordErrorMessage} error={inputText?.passworError} />

            <Checkbox type="checkbox" label="Stay Signed in until you sign out" handleChange={checked => setChecked(!checked)} defaultChecked={checked} />

            <Button btnText="Continue" btnColor="CCFF5F" textcolor="111111" onClick={handleSubmit} />

            <div className="sign_up_link" onClick={() => changeAuth("signup")}>
                Do not have an IKEA account yet? <span>Create one now:</span>
            </div>

        </div>
    )
}