import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";
const Catagories = () => {
    const items = [

        {
            id: 1,
            imgUrl: '/images/catagories/catagories1.jpg'
        },
        {
            id: 2,
            imgUrl: '/images/catagories/catagories2.jpg'
        },
        {
            id: 3,
            imgUrl: '/images/catagories/catagories3.jpg'
        },
        {
            id: 4,
            imgUrl: '/images/catagories/catagories4.jpg'
        },
        {
            id: 5,
            imgUrl: '/images/catagories/catagories5.jpg'
        },
        {
            id: 6,
            imgUrl: '/images/catagories/catagories6.jpg'
        },
        {
            id: 7,
            imgUrl: '/images/catagories/catagories7.jpg'
        },
        {
            id: 18,
            imgUrl: '/images/catagories/catagories8.jpg'
        },
        {
            id: 9,
            imgUrl: '/images/catagories/catagories9.jpg'
        },
    ];
    return (
        <div className='catagories_wrapper'>
            <div className="heading font-28 bold-text">Catagories</div>
            <AliceCarousel items={items.map(item => <img src={item.imgUrl} key={item.id} />)} infinite disableDotsControls responsive={{
                0: {
                    items: 1,
                },
                1024: {
                    items: 6,
                }
            }} />
        </div>
    )
}

export default Catagories

