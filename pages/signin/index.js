import React, { useState } from 'react'

import { SignInCard } from '../../components/profile/sign-in-card'
import { SignUpCard } from '../../components/profile/sign-up-card'
import { useRecoilValue } from 'recoil'
import { authState } from '../../recoil/atoms/home'
import { useRouter } from 'next/router'

const index = () => {


    // const [authState, setAuthState] = useState("login");


    const authStateValue = useRecoilValue(authState)

    const router = useRouter()

    return (
        <div className='signin_wrapper'>

            <div className="left_container">
                <div className="logo" onClick={() => router.push('/')}>
                    <img src="/images/logo.png" alt="" />
                </div>
                <div className='message_container'>
                    <div className="heading">Login to your Turbus account.</div>
                    <div className="message">
                        <div className='msg_title'>Too many Passwords?</div>
                        <div className="msg_desc">You can now login with an OTP we will send on your email address or verified mobile number.</div>
                    </div>
                    <div className="messge_btm">
                        Access your TURBUS account using your email address to add and verify your mobile number.
                    </div>
                </div>
                <div className="footer font-12">
                    <div className="top">TURBUS.in - Cookie Policy and Privacy Policy</div>
                    <div className="bottom">© Inter TURBUS Systems B.V. 1999-2023</div>
                </div>
            </div>

            {/* {authState === "login" ? <SignInCard changeAuth={(val) => setAuthState(val)} /> : <SignUpCard changeAuth={(val) => setAuthState(val)} />} */}

            <div className='riht_wrapper'>
                {authStateValue === "login" ? <SignInCard /> : authStateValue === "signup" ? <SignUpCard /> : null}
            </div>


        </div>
    )
}

export default index
