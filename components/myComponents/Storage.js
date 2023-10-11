import React from 'react'
const storageItems = [
    { id: 0, image: "/images/slides/storageitem1.avif", overlapText: "Small storage & organiser from Rs19" },
    { id: 1, image: "/images/slides/storageitem2.avif", overlapText: "Food storage & organising from Rs99" },
    { id: 2, image: "/images/slides/storageitem3.avif", overlapText: "Hook & organisation from Rs50" },
    { id: 3, image: "/images/slides/storageitem4.avif", overlapText: "Plants & flowers from Rs69" },
    { id: 4, image: "/images/slides/storageitem5.avif", overlapText: "Vases & bows from Rs19" },
    ,

]
function Storage() {
    const Storage = ({ item }) => {
        return (
            <div className="storage_container">
                <div>
                    <img src={item.image} alt="" />
                </div>
                <div className="overlapText">
                    {item.overlapText}
                </div>
            </div>
        )
    }
    return (
        <div>

            <div className="title mt20 mb20 bold-text font20">A lot more for a lot less</div>

            <div className="storage_items_wrapper">


                {storageItems?.map((item) => <Storage item={item} />)}
            </div>
        </div>
    )
}

export default Storage
