import React, { useEffect, useState } from 'react'
import Navbar from '../../components/ui-elements/nav-bar/navbar'
import Checkbox from '../../components/inputs/checkbox'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { categoriesState } from '../../recoil/atoms/home'
import FilteredCategories from '../../components/catagories/filteredCategories'

const index = () => {
    const [checked, setChecked] = useState(false)
    const items = [
        { id: 1, category: "mobile", imgUrl: '/images/catagories/mobile.png', price: "120", strikethroughPrice: "28828", itemName: "Redmi 12 pro" },
        { id: 2, category: "mobile", imgUrl: '/images/catagories/mobile.png', price: "120", strikethroughPrice: "28828", itemName: "Redmi 12 pro" },
        { id: 3, category: "mobile", imgUrl: '/images/catagories/mobile.png', price: "120", strikethroughPrice: "28828", itemName: "Redmi 12 pro" },
        { id: 4, category: "laptops", imgUrl: '/images/catagories/mobile.png', price: "120", strikethroughPrice: "28828", itemName: "Redmi 12 pro" },
        { id: 5, category: "mobile", imgUrl: '/images/catagories/mobile.png', price: "120", strikethroughPrice: "28828", itemName: "Redmi 12 pro" },
        { id: 6, category: "mobile", imgUrl: '/images/catagories/mobile.png', price: "120", strikethroughPrice: "28828", itemName: "Redmi 12 pro" },
        { id: 7, category: "mobile", imgUrl: '/images/catagories/mobile.png', price: "120", strikethroughPrice: "28828", itemName: "Redmi 12 pro" },
        { id: 8, category: "mobile", imgUrl: '/images/catagories/mobile.png', price: "120", strikethroughPrice: "28828", itemName: "Redmi 12 pro" },
    ]

    const [filteredItems, setFilteredItems] = useState(items)

    const categoryValue = useRecoilValue(categoriesState)


    useEffect(() => {

        if (categoryValue) {
            setFilteredItems(items.filter(item => item.category === categoryValue))
        }

    }, [categoryValue])


    console.log({ filteredItems })
    console.log({ categoryValue })


    return (
        <div className='catagory_page_wrapper'>
            <Navbar />
            <div className="catagory_container">
                <div className="left_side">
                    <div className="heading">Category</div>
                    <Checkbox type="checkbox" label="Top brands" handleChange={checked => setChecked(!checked)} defaultChecked={checked} />
                    <Checkbox type="checkbox" label="Top brands" handleChange={checked => setChecked(!checked)} defaultChecked={checked} />
                    <Checkbox type="checkbox" label="Top brands" handleChange={checked => setChecked(!checked)} defaultChecked={checked} />
                    <Checkbox type="checkbox" label="Top brands" handleChange={checked => setChecked(!checked)} defaultChecked={checked} />
                </div>
                <div className="right_side">
                    {/* {authStateValue === "login" ? <SignInCard /> : authStateValue === "signup" ? <SignUpCard /> : null} */}

                    {filteredItems?.map(item => <FilteredCategories item={item} />)}
                </div>
            </div>
        </div>
    )
}

export default index
