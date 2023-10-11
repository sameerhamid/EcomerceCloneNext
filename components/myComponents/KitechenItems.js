import React from 'react'
const whatsnew = [
    { id: 0, image: "/images/slides/whatsnew1.avif" },
    { id: 1, image: "/images/slides/whatsnew2.avif" },
    { id: 2, image: "/images/slides/whatsnew3.avif" },
    { id: 3, image: "/images/slides/whatsnew4.avif" },
    { id: 4, image: "/images/slides/whatsnew5.avif" },


]
function kitchen() {
    const Whatnew = ({ item }) => {


        return (
            <div className="whatnew_container mt20 mb20">
                <img src={item.image} alt="" />
            </div>
        )
    }
    return (
        <>
            <div className="title mt20 bold-text text-center font20">
                What's NEW at IKEA
            </div>
            <div className="whatsnew_wrapper">
                <div className="istwhatnew">
                    {whatsnew?.slice(0, 1).map((item) => <Whatnew item={item} />)}
                </div>
                <div className="secondwhatnew">
                    {whatsnew?.slice(1, 3).map((item) => <Whatnew item={item} />)}
                </div>
                <div className="thirdwhatnew">
                    {whatsnew?.slice(3, 5).map((item) => <Whatnew item={item} />)}
                </div>

            </div></>
    )
}

export default kitchen
