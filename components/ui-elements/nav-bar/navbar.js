import { useRouter } from 'next/router'
import React from 'react'

const Navbar = () => {
    const router = useRouter()
    return (
        <div className="navbar_wrapper">
            <div className="logo_wrapper" onClick={() => router.push("/")}>
                <img src="/images/logo.png" alt="logo" />
            </div>
            <div className="links_wrapper">
                <div className='link' onClick={() => router.push("/")}>Home</div>
                <div className='link'>About us</div>
                <div className='link' onClick={() => router.push('/movify')}>Movify</div>
                <div className='link' onClick={() => router.push("/signin")}>Sign in</div>
            </div>
        </div>
    )
}

export default Navbar