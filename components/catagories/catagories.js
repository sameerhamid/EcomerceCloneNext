import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { categoriesState } from '../../recoil/atoms/home';
import { useRouter } from 'next/router';
const Catagories = () => {
    const [catagoriesSelected, setCategoriesSelected] = useRecoilState(categoriesState);
    const router = useRouter()
    const items = [
        {
            id: 1,
            category: 'mobile',
            imgUrl: '/images/catagories/catagories1.jpg'
        },
        {
            id: 2,
            category: 'laptops',
            imgUrl: '/images/catagories/catagories2.jpg'
        },
        {
            id: 3,
            category: 'cloathes',
            imgUrl: '/images/catagories/catagories3.jpg'
        },
        {
            id: 4,
            category: 'shoes',
            imgUrl: '/images/catagories/catagories4.jpg'
        },
        {
            id: 5,
            category: 'mobile',
            imgUrl: '/images/catagories/catagories5.jpg'
        },
        {
            id: 6,
            category: 'mobile',
            imgUrl: '/images/catagories/catagories6.jpg'
        },
        {
            id: 7,
            category: 'mobile',
            imgUrl: '/images/catagories/catagories7.jpg'
        },
        {
            id: 18,
            category: 'mobile',
            imgUrl: '/images/catagories/catagories8.jpg'
        },
        {
            id: 9,
            category: 'mobile',
            imgUrl: '/images/catagories/catagories9.jpg'
        },
    ];

    console.log({ catagoriesSelected })
    return (
        <div className='catagories_wrapper'>
            <div className="heading font-28 bold-text">Catagories</div>
            <AliceCarousel items={items.map(item => <img src={item.imgUrl} key={item.id}
                onClick={() => {
                    setCategoriesSelected(item.category);
                    router.push("category")

                }} />)} infinite disableDotsControls responsive={{
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

