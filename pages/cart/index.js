import React, { useState } from 'react'
import Navbar from '../../components/myComponents/NavbarSec';
import Footer from '../../components/ui/footer';

import { GrLocation } from 'react-icons/gr'
const posters = [
    { id: 0, image: "https://m.media-amazon.com/images/I/31bo1L1yL7L._AC_SR38,50_.jpg" },
    { id: 1, image: "https://m.media-amazon.com/images/I/31DM9F4PBEL._AC_SR38,50_.jpg" },
    { id: 2, image: "https://m.media-amazon.com/images/I/31HCezMp0AL._AC_SR38,50_.jpg" },
    { id: 3, image: "https://m.media-amazon.com/images/I/31jJEP9UIFL._AC_SR38,50_.jpg" },

]
const cart_imgs = [
    "https://m.media-amazon.com/images/I/61Zh467pKjL._AC_SX342_.jpg",
    "https://m.media-amazon.com/images/I/51uzgPygWPL._AC_SX342_.jpg",
    "https://m.media-amazon.com/images/I/61diRyXUpPL._AC_SX342_.jpg",
    "https://m.media-amazon.com/images/I/61ziCBwTtEL._AC_SX342_.jpg"

]
const itemDetails =
{
    id: 0, title: "Apple AirPods Pro (2nd Gen) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio MagSafe Charging Case (Lightning) Bluetooth Headphones for iPhone", visit: "Visit the Apple Store", star: "/images/slides/stars.jpg", starpoints: 4.7, rating: "46,000", answered: "| 528 answered questions", logo: "Amazon's", logogolden: "Choice", item: "in Earbud & In-Ear Headphones by Apple", availabe: "Currently unavailable.", stockstatus: "We don't know when or if this item will be back in stock.", style: "Style:", stylevalue: "Lighting", lightining: "Lightning", usb: "USB-C", set: "Set:", setvalue: "Without AppleCare+", withapple: "With AppleCare+", without: "Without AppleCare+", brand: "Brand", brandvalue: "Apple", model: "Model Name", modelvalue: "AirPods Pro", color: "Color", colorvalue: "White", formfactor: "Form Factor", formfactorvalue: "In Ear"
}



function Cart() {
    const [show, setShow] = useState(0);

    const handleShow = (item) => {
        setShow(item);
    };

    const Poster = ({ img }) => {
        return (
            <div className='posterimgs'>
                <img
                    onMouseEnter={() => handleShow(img.id)}
                    onMouseLeave={() => handleShow(show)}
                    src={img.image}
                    alt=''
                />
            </div>
        );
    };
    const Details = () => {


        const detail = itemDetails;
        return (
            <div className='details-container'>
                <div className='heading'>
                    {detail.title}
                </div>
                <span className='skyblue'>{detail.visit}</span>
                <div className='feedback'><span className='skyblue'>{detail.starpoints}</span><img src={detail.star} alt='' /><span className='skyblue'>{detail.rating}</span></div>
                <span>{detail.answered}</span>
                <div className='logo_item'><span className='brand'>{detail.logo}<span className='golden'> {detail.logogolden}</span></span><span>{detail.item}</span>
                </div><hr />
                <div className='itemStatus mt40 '>
                    <span className='color-green bold-text mb20 font20'>{detail.availabe}</span><br />
                    <span>{detail.stockstatus}</span>
                    <div className='styleWrapper flex mb10 mt10' >
                        <span>{detail.style}</span>
                        <span className='bold-text'>{detail.stylevalue}</span>
                    </div>
                    <div className='ligting_usb flex'>
                        <span className='border-red'>{detail.lightining}</span>
                        <span className='border-gray'>{detail.usb}</span>
                    </div>
                    <div className='flex mt20 mb10'><span>{detail.set}</span>
                        <span className='bold-text'>{detail.setvalue}</span></div>
                    <div className='flex mb10'><span className='border-gray'>{detail.withapple}</span>
                        <span className='bold-text border-red'>{detail.without}</span></div>
                    <div className='flex mt20 mb10'>
                        <span className='bold-text'>{detail.brand}</span>
                        <span>{detail.brandvalue}</span>
                    </div>
                    <div className='flex mt20 mb10'>
                        <span className='bold-text'>{detail.model}</span>
                        <span>{detail.modelvalue}</span>
                    </div> <div className='flex mb10'>
                        <span className='bold-text'>{detail.color}</span>
                        <span>{detail.colorvalue}</span>
                    </div>
                    <div className='flex'>
                        <span className='bold-text'>{detail.formfactor}</span>
                        <span>{detail.formfactorvalue}</span>
                    </div>
                </div>
            </div>
        );
    };
    `   `
    return (
        <>
            <Navbar />
            <div className='cart_wrapper'>

                <div className='small_images'>
                    {posters?.map((img) => (
                        <Poster key={img.id} img={img} />
                    ))}
                </div>
                <div className='hoveredimages'>
                    {show !== null && (
                        <img src={cart_imgs[show]} alt='' />
                    )}
                    <br /><span className=''>Roll over image to zoom in</span>
                </div>
                <div className='details_wrapper'>
                    {/* {itemDetails?.map((detail) => <Details detail={detail} />)} */}
                    <Details />
                    <div className='aboutsec'>
                        <div className='bold-text mb20'>About this item</div>
                        <ul>
                            <li className='mb10'>RICHER AUDIO EXPERIENCE – The Apple-designed H2 chip pushes advanced audio performance even further, resulting in smarter noise cancellation and more immersive sound. The low-distortion, custom-built driver delivers crisp, clear high notes and deep, rich bass in stunning definition. So every sound is more vivid than ever..Note : If the size of the earbud tips does not match the size of your ear canals or the headset is not worn properly in your ears, you may not obtain the correct sound qualities or call performance. Change the earbud tips to ones that fit more snugly in your ear</li>
                            <li className='mb10'>
                                NEXT-LEVEL ACTIVE NOISE CANCELLATION – Up to 2x more Active Noise Cancellation than the previous AirPods Pro for dramatically less noise on your commute, or when you want to focus. Adaptive Transparency lets you comfortably hear the world around you, adjusting for intense noise—like sirens or construction—in real time.
                            </li>
                            <li>SOUND ALL AROUND – Personalized Spatial Audio surrounds you in sound tuned just for you. It works with dynamic head tracking to immerse you deeper in music and movies.</li>
                        </ul>
                    </div>
                </div>
                <div className='leftside'>
                    <div className='productStatus border-gray flex-column'>
                        <span className='bold-text font20 color-brown text-center'>Currenlty unavailabe</span>
                        <span>We don't know when or if this item will be back in stock.</span>
                        <span><GrLocation /> Deliver to india</span>
                        <hr />
                        <button className='border-gray'>Add to list</button>
                    </div>
                    <div className='flex-column mt20 border-gray border-radius'>
                        <span className='bold-text mb10 text-center'>Add an Accessory</span><hr />
                        <span className='skyblue'> Apple MagSafe Charger - Wireless Charger with Fast Charging Capability, Type C Wall Charger, Compatible with iPhone and AirPodsApple MagSafe Charger - Wireless Charger with Fast Charging Capability, Type C Wall Charger, Co…</span>
                        <div className='price-button mt10'><span>$54.99 </span><button>Add to Cart</button>

                        </div><hr />
                        <span className='skyblue mt20'> Apple MagSafe Charger - Wireless Charger with Fast Charging Capability, Type C Wall Charger, Compatible with iPhone and AirPodsApple MagSafe Charger - Wireless Charger with Fast Charging Capability, Type C Wall Charger, Co…</span>
                        <div className='price-button mt10'><span>$54.99 </span><button>Add to Cart</button></div>

                    </div><div className='text-center mt20 sell'><span className='text-center'>Have one to sell?</span><br />
                        <span className='border-gray border-radius'>Sell on Amazon</span></div>
                </div>

            </div >
            <Footer />
        </>
    );
}

export default Cart
