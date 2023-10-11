import React from 'react'
import { Navbar } from 'react-bootstrap'

function Cart() {
    return (
        <div>
            <Navbar />
            <div className='cart_wrapper'>
                <h1>Your bag is empty</h1>
                <div className='login_acc mt20'>
                    <span>Have an account</span>
                    <div> <a className='underline-text'>Join or log in</a> <span>for a smoother checkout.</span></div>
                </div>
            </div>
        </div>
    )
}

export default Cart
