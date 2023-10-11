import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { BsFillCaretLeftFill } from 'react-icons/bs'
function Watches() {
    const watches = [
        { id: 0, image: "https://m.media-amazon.com/images/I/71wXX5IRnzL._AC_SY200_.jpg" },
        { id: 0, image: "https://m.media-amazon.com/images/I/61MzIOubB+L._AC_SY200_.jpg" },
        { id: 0, image: "https://m.media-amazon.com/images/I/61FZ83ArEwL._AC_SY200_.jpg" },
        { id: 0, image: "https://m.media-amazon.com/images/I/61yhPPcmesL._AC_SY200_.jpg" },
        { id: 0, image: "https://m.media-amazon.com/images/I/61BY9Mhhj2L._AC_SY200_.jpg" },
        { id: 0, image: "https://m.media-amazon.com/images/I/61y2VVWcGBL._AC_SY200_.jpg" },
        { id: 0, image: "https://m.media-amazon.com/images/I/61TapeOXotL._AC_SY200_.jpg" },
        { id: 0, image: "https://m.media-amazon.com/images/I/714vvt0LLOL._AC_SY200_.jpg" }
    ]
    const Watch = ({ watch }) => {
        return (

            <div className='watch_container'>
                <img src={watch.image} alt='' />
            </div>
        )
    }

    return (
        <div className='watches_wrapper'>
            <div className='title'>Starting Rs799 | Bestselling smartwatches form top brands <span className='skyblue'>See all Offers</span></div>
            <div className='watches'>
                {watches?.map((watch) => <Watch watch={watch} />)}
                <BsFillCaretLeftFill className='left' />
            </div>
        </div>
    )
}

export default Watches
