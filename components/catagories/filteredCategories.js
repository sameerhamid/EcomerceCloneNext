import React from 'react'

const FilteredCategories = ({ item }) => {
    return (
        <div className='filtered_categories_wrapper'>
            <div className="item_img">
                <img src={item.imgUrl} alt="" />
            </div>
            <div className="item_details">
                <div className='price font-20 bold-text'>{`₹${item.price}`}</div>
                <div className='strike_price font-12 '>{`₹${item.strikethroughPrice}`}</div>
                <div className="name">{item.itemName}</div>
            </div>
        </div>
    )
}

export default FilteredCategories
