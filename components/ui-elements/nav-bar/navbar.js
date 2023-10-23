import { useRouter } from 'next/router'
import React from 'react'

const Navbar = () => {
    const router = useRouter()
    return (
        <div className="navbar_wrapper">
            <div className="logo_wrapper">
                <img src="/images/logo.png" alt="logo" />
            </div>
            <div className="links_wrapper">
                <div className='link'>Home</div>
                <div className='link'>About us</div>
                <div className='link'>Contact us</div>
                <div className='link' onClick={() => router.push("signin")}>Sign in</div>
            </div>
        </div>
    )
}

export default Navbar