import { useState } from "react"
import Checkbox from "../../inputs/checkbox"
import Input from "../../inputs/input"
import Button from "../../inputs/button"
import { useSetRecoilState } from "recoil"
import { authState } from "../../../recoil/atoms/home"
import PasswordInput from "../../inputs/passwordInput"

export const SignInCard = () => {
    const [emailOrPhnNum, setEmailOrPhnNum] = useState("")
    const [password, setPassword] = useState("")
    const [checked, setChecked] = useState(true)

    const changeAuth = useSetRecoilState(authState)



    return (
        <div className="login_right_container">
            <Input label="Email or verified Mobile Number" placeholder="Email Or Mobile Number" type="text" value={emailOrPhnNum} handleChange={val => setEmailOrPhnNum(val)} />
            {/* 
            <Input label="Password" placeholder="Password" type="password" value={password} handleChange={val => setPassword(val)} /> */}
            <PasswordInput label="Password" placeholder="Password" type="password" value={password} handleChange={val => setPassword(val)} />

            <Checkbox type="checkbox" label="Stay Signed in until you sign out" handleChange={checked => setChecked(!checked)} defaultChecked={checked} />


            <Button btnText="Continue" btnColor="CCFF5F" textcolor="111111" />

            <div className="sign_up_link" onClick={() => changeAuth("signup")}>
                Do not have an IKEA account yet? <span>Create one now:</span>

            </div>

        </div>
    )
}