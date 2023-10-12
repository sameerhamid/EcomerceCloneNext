import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import { SlMagnifier } from "react-icons/sl"
import { AiOutlineCamera } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import { PiShoppingCartSimpleFill } from "react-icons/pi"
import { TbBus } from "react-icons/tb"
import { MdOutlineStore } from "react-icons/md"
import ShowMenu from "./ShowMenu"
import { useRouter } from 'next/dist/client/router'





function Navbar() {
    const router = useRouter()
    const handleProducts = () => {
        router.push('./categories')
    }
    const [menu, setmenu] = useState()
    console.log("menu", menu)
    return (
        <div className='navbar_container'>
            <div className='blackheader'>
                Now buy IKEA Gift Cards online
            </div>
            <div className='searchbar_icon_container'>


                <div className='menu_icon_wrapper'>
                    <AiOutlineMenu className='icon menu-icon' onClick={() => setmenu(!menu)} />
                    {menu && <ShowMenu onClick={() => setmenu(false)} />}

                </div>

                <div className='webicon'>
                    <img src='/images/navbarimgs/webicon.svg' alt='' />
                </div>
                <div className='search_bar'>
                    <input type='search' placeholder='what are you look for?'></input>

                    <div className='magnifier'> <SlMagnifier /></div>
                    <div className='camera'><AiOutlineCamera /></div>
                </div>
                <button className='userdetails'>
                    <AiOutlineUser />
                    <span>Hej! Log in or sign up</span>
                </button>
                <div className='like_cart'>
                    <AiOutlineHeart className='icon' />
                    <PiShoppingCartSimpleFill className='icon' />
                </div>
            </div>
            {/* /* navbar btns section starts from  */}
            <div className='navbarbtns'>
                <div className='btns'>
                    <span className='product' onClick={handleProducts} >Product</span>
                    <span>Rooms</span>
                    <span>New at IKEA</span>
                    <span>IKEA for Business</span>
                    <span>Offers</span></div>
                <div className='contact_address'>
                    <div className='postal'>
                        <TbBus />
                        <span>Enter postal code</span>
                    </div>
                    <div className='select_store'>
                        <MdOutlineStore />
                        <span>Select store</span>
                    </div>
                </div>
            </div>
            <div className='welcome'>
                <h1>Hej! Welcome back</h1>
                <span>Join IKEA Family to get inspired, claim discounts, and receive rewards.</span>
            </div>
        </div >
    )
}

export default Navbar
