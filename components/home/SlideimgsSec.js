import React, { useState } from 'react'

const slideimgs = [
    { id: 0, image: "https://turbusdweb.kupos.cl/images/turbus/services/simplus.png", text: "Simplus", hoveredtext: "Compra y gestiona pasajes de tu empresa en un mismo lugar.", nothovered_img: "https://turbusdweb.kupos.cl/images/turbus/services/Aeropuerto-icon-inactive.svg", hovered_img: "https://turbusdweb.kupos.cl/images/turbus/services/Turbus-icon-active.svg", },
    { id: 1, image: "https://turbusdweb.kupos.cl/images/turbus/services/simplus.png", text: "Simplus 2", hoveredtext: "Compra y gestiona pasajes de tu empresa en un mismo lugar.", nothovered_img: "https://turbusdweb.kupos.cl/images/turbus/services/Aeropuerto-icon-inactive.svg", hovered_img: "https://turbusdweb.kupos.cl/images/turbus/services/Turbus-icon-active.svg" },
    { id: 2, image: "https://turbusdweb.kupos.cl/images/turbus/services/simplus.png", text: "Simplus 3", hoveredtext: "Compra y gestiona pasajes de tu empresa en un mismo lugar.", nothovered_img: "https://turbusdweb.kupos.cl/images/turbus/services/Aeropuerto-icon-inactive.svg", hovered_img: "https://turbusdweb.kupos.cl/images/turbus/services/Turbus-icon-active.svg" },
    { id: 3, image: "https://turbusdweb.kupos.cl/images/turbus/services/simplus.png", text: "Simplus 4", hoveredtext: "Compra y gestiona pasajes de tu empresa en un mismo lugar.", nothovered_img: "https://turbusdweb.kupos.cl/images/turbus/services/Aeropuerto-icon-inactive.svg", hovered_img: "https://turbusdweb.kupos.cl/images/turbus/services/Turbus-icon-active.svg" },
    { id: 4, image: "https://turbusdweb.kupos.cl/images/turbus/services/simplus.png", text: "Simplus 5", hoveredtext: "Compra y gestiona pasajes de tu empresa en un mismo lugar.", nothovered_img: "https://turbusdweb.kupos.cl/images/turbus/services/Aeropuerto-icon-inactive.svg", hovered_img: "https://turbusdweb.kupos.cl/images/turbus/services/Turbus-icon-active.svg" },
]
const Slide = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isHovering, setIsHoering] = useState(false)
    const handlemouseover = () => {
        setIsHoering(true)
    }
    const handlemouseout = () => {
        setIsHoering(false)
    }

    const handleHover = () => {
        setIsHovered(!isHovered);
    }
    return (
        <div className='slideimgsfnc'>
            <div className='slide-img' onMouseEnter={handleHover} onMouseLeave={handleHover}>  <img src={item.image} alt="" />
                <img className='overlap_img' src={isHovered ? item.hovered_img : item.nothovered_img} alt='' />
                <div className={isHovered ? 'hoveredtext' : 'overlaptext'} >{isHovered ? item.hoveredtext : item.text}</div>
            </div>

        </div>
    )
}
const SlideimgsSec = () => {
    return (
        <div className='slideimgs_wrapper'>
            <div className='logo_location mb20'>
                <img src="/images/homeimgs/location-logo.png" alt="" width={50} height={50} />
                <div className="location_text">
                    <span className='font22'>Nuestros</span><br />
                    <span className='font24 bold-text'>servicios</span>
                </div>
            </div>
            <div className="slideimgs mt40">
                {slideimgs?.map((item) => <Slide item={item} />)}

            </div>

        </div >
    )
}

export default SlideimgsSec
