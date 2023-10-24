import { useState } from "react"
import Checkbox from "../../inputs/checkbox"
import Input from "../../inputs/input"
import Button from "../../inputs/button"
import Selector from "../../inputs/selector"
import { useSetRecoilState } from "recoil"
import { authState } from "../../../recoil/atoms/home"
import CommonService from "../../../services/commonService"

export const SignUpCard = () => {
    const genderOptions = [
        { id: 1, gender: "male" },
        { id: 2, gender: "female" },
        { id: 3, gender: "other" },
    ]
    // const [firstName, setFirstName] = useState("")
    // const [surName, setSurName] = useState("")
    // const [birthdate, setBirthdate] = useState("")
    const [gender, setGender] = useState("male")
    // const [postcode, setPostcode] = useState("")
    // const [mobNum, setMobNum] = useState("")
    // const [email, setEmail] = useState("")
    const [checked, setChecked] = useState(true)

    // const [state, setState] = useState();
    const [inputText, setInputText] = useState(null)
    const changeAuth = useSetRecoilState(authState)

    const onTextChange = (value, type) => {
        setInputText({ ...inputText, [type]: value, [type + "Error"]: null })
        // validate()
    }

    const validate = () => {
        if (!inputText?.name) {
            setInputText({ ...inputText, "nameError": true, nameErrorMessage: 'name is required' })
        } else if (!inputText?.surname) {
            setInputText({ ...inputText, "surnameError": true, surnameErrorMessage: 'surname is required' })
        } else if (!inputText?.birthdate) {
            setInputText({ ...inputText, "birthdateError": true, birthdateErrorMessage: 'birthdate is required' })
        } else if (!inputText?.postcode) {
            setInputText({ ...inputText, "postcodeError": true, postcodeErrorMessage: 'postcode is required' })
        } else if (!inputText?.mobnum) {
            setInputText({ ...inputText, "mobileError": true, mobileErrorMessage: 'Mobile Number is required' })
        } else if (inputText?.mobnum.length !== 10) {
            setInputText({ ...inputText, "mobileError": true, mobileErrorMessage: 'Mobile Number should be of 10 digits' })
        } else if (!inputText?.email) {
            setInputText({ ...inputText, "emailError": true, emailErrorMessage: 'Email  is required' })
        } else if (!CommonService.isEMailValid(inputText?.email)) {
            setInputText({ ...inputText, "emailError": true, emailErrorMessage: 'enter valid email' })
        }
    }
    const handleSubmit = () => {
        validate()
    }


    return (
        <div className="right_container">
            <div className="heading">Become a member of TURBUS Family today. Did we mention it's free to join? <span>Get the details.</span></div>
            <Input label="First Name" placeholder="First Name" type="text" value={inputText?.name} handleChange={val => onTextChange(val, "name")} errorMesage={inputText?.nameErrorMessage} error={inputText?.nameError} />
            <Input label="Surname" placeholder="Surname" type="text" value={inputText?.surname} handleChange={val => onTextChange(val, 'surname')} errorMesage={inputText?.surnameErrorMessage} error={inputText?.surnameError} />
            <Input label="Birthdate" type="date" value={inputText?.birthdate} handleChange={val => onTextChange(val, "birthdate")} errorMesage={inputText?.birthdateErrorMessage} error={inputText?.birthdateError} />
            <Selector label="Gender" handleChange={gender => setGender(gender)} gender={gender} genderOptions={genderOptions} />
            <Input label="Post code" placeholder="Post code" type="text" value={inputText?.postcode} handleChange={val => onTextChange(val, "postcode")} errorMesage={inputText?.postcodeErrorMessage} error={inputText?.postcodeError} />
            <Input label="Mobile" placeholder="Mobile Number" type="number" value={(inputText?.mobnum)} handleChange={val => onTextChange(val, "mobnum")} errorMesage={inputText?.mobileErrorMessage} error={inputText?.mobileError} />
            <Input label="Email" placeholder="Email" type="email" value={inputText?.email} handleChange={val => onTextChange(val, "email")} errorMesage={inputText?.emailErrorMessage} error={inputText?.emailError} />

            <Checkbox type="checkbox" label="
                    I would like to receive news, tips and marketing offers from TURBUS." handleChange={checked => setChecked(!checked)} defaultChecked={checked} />

            <Checkbox type="checkbox" label="
                        I have read and understood the Terms & Conditions and Privacy Policy.
                        " handleChange={checked => setChecked(!checked)} defaultChecked={checked} />

            <Button btnText="Continue to phone varification" btnColor="111111" textcolor="fff" onClick={handleSubmit} />

            <div className="sign_up_link" onClick={() => changeAuth("login")}>
                Do you have an IKEA account ? <span>Login:</span>

            </div>
        </div>
    )
}