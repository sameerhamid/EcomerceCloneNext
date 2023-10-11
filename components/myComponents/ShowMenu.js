
import { useEffect, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

const menu = ({ onClick }) => {
    const [state, setState] = useState(false);

    useEffect(() => {

    }, [state])
    return (

        <>

            {/* setState(true) */}

            <div className='menu_wrapper flex flex-col items-center'>
                <div className='menu_img'><RxCross2 onClick={() => onClick()} /> <img src='../images/navbarimgs/webicon.svg' width={60} alt='' /></div>
                <div className="links">  <span className='title text-2xl font-bold'>Products</span>
                    <span className='title text-2xl font-bold'>Rooms</span>
                    <span className='title text-2xl font-bold'>New at IKEA</span>
                    <span className='title text-2xl font-bold'>IKEA for Business</span>
                    <span className='title text-2xl font-bold'>Offers</span>
                    <p className='title text-xl'>Tips and inspirations</p>
                    <p className='title text-xl'>Track your order</p>
                    <p className='title text-xl'>Design your room</p>
                    <div>
                        <p className='title text-xs'>Join IKEA Family</p>
                        <p className='title text-xs'>Our stores</p>
                        <p className='title text-xs'>Customer service</p>
                        <p className='title text-xs'>Download the IKEA app</p>
                    </div>
                </div>

            </div>
        </>

    )
}

export default menu
