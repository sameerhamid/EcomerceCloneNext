import { useState } from "react"
import Checkbox from "../../inputs/checkbox"
import Input from "../../inputs/input"
import Button from "../../inputs/button"
import Selector from "../../inputs/selector"
import { useSetRecoilState } from "recoil"
import { authState } from "../../../recoil/atoms/home"

export const SignUpCard = () => {
    const genderOptions = [
        { id: 1, gender: "male" },
        { id: 2, gender: "female" },
        { id: 3, gender: "other" },
    ]
    const [firstName, setFirstName] = useState("")
    const [surName, setSurName] = useState("")
    const [birthdate, setBirthdate] = useState("")
    const [gender, setGender] = useState("male")
    const [postcode, setPostcode] = useState("")
    const [mobNum, setMobNum] = useState("")
    const [email, setEmail] = useState("")
    const [checked, setChecked] = useState(true)

    const changeAuth = useSetRecoilState(authState)


    return (
        <div className="right_container">
            <div className="heading">Become a member of TURBUS Family today. Did we mention it's free to join? <span>Get the details.</span></div>
            <Input label="First Name" placeholder="First Name" type="text" value={firstName} handleChange={val => setFirstName(val)} />
            <Input label="Surname" placeholder="Surname" type="text" value={surName} handleChange={val => setSurName(val)} />
            <Input label="Birthdate" placeholder="Birthdate" type="text" value={birthdate} handleChange={val => setBirthdate(val)} />
            <Selector label="Gender" handleChange={gender => setGender(gender)} gender={gender} genderOptions={genderOptions} />
            <Input label="Post code" placeholder="Post code" type="text" value={postcode} handleChange={val => setPostcode(val)} />
            <Input label="Mobile" placeholder="Mobile Number" type="number" value={Number(mobNum)} handleChange={val => setMobNum(Number(val))} />
            <Input label="Email username" placeholder="Email" type="email" value={email} handleChange={val => setEmail(Number(val))} />

            <Checkbox type="checkbox" label="
                    I would like to receive news, tips and marketing offers from TURBUS." handleChange={checked => setChecked(!checked)} defaultChecked={checked} />

            <Checkbox type="checkbox" label="
                        I have read and understood the Terms & Conditions and Privacy Policy.
                        " handleChange={checked => setChecked(!checked)} defaultChecked={checked} />

            <Button btnText="Continue to phone varification" btnColor="111111" textcolor="fff" />

            <div className="sign_up_link" onClick={() => changeAuth("login")}>
                Do you have an IKEA account ? <span>Login:</span>

            </div>
        </div>
    )
}