import { slice } from 'lodash'
import React from 'react'

const location_imgs = [
    { id: 0, image: "https://turbusdweb.kupos.cl/images/turbus/Turbus-website-destination-Quintero.png", },
    { id: 1, image: "https://turbusdweb.kupos.cl/images/turbus/Turbus-website-destinos-valparaiso.png" },
    { id: 2, image: "https://turbusdweb.kupos.cl/images/turbus/Turbus-website-destination-Valdivia.png" },
    { id: 3, image: "https://turbusdweb.kupos.cl/images/turbus/Turbus-website-destination-Osorno.png" }
]
const Locations_images = ({ img }) => {
    return (
        <div className="location_imgs">
            <img src={img.image} alt="" />
        </div>
    )
}
const Locations = () => {
    return (
        <div className='location_wrapper'>
            <div className='logo_location mb20'>
                <img src="/images/homeimgs/location-logo.png" alt="" width={50} height={50} />
                <div className="location_text">
                    <span className='font22'>Destinos</span><br />
                    <span className='font24 bold-text'>más buscados</span>
                </div>
            </div>
            <div className="location_images_wrapper mt20">
                <div>{location_imgs?.slice(0, 1).map((img) => <Locations_images img={img} />)}
                </div>
                <div className='secondcolumn'>{location_imgs?.slice(1, 3).map((img) => <Locations_images img={img} />)}</div>
                <div>{location_imgs?.slice(3, 4).map((img) => <Locations_images img={img} />)}</div>


            </div>
        </div>
    )
}

export default Locations
