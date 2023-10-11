import React from 'react'
import { useRouter } from 'next/dist/client/router';
import Watches from './Watches';

function Categories() {
    const Electronics = [
        { id: 0, image: "https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_UL480_QL65_.jpg", desc: "Apple AirPods Pro (2nd Gen) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio MagSafe Charging Case (Lightning) Bluetooth Headphones for iPhone", feedback: "/images/slides/stars.jpg", feedbackpoints: "45,745", overlap: "Best Seller" },
        { id: 1, image: "https://m.media-amazon.com/images/I/713xuNx00oS._AC_UL320_.jpg", desc: "Apple AirPods Pro (2nd Gen) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio MagSafe Charging Case (Lightning) Bluetooth Headphones for iPhone", feedback: "/images/slides/stars.jpg", feedbackpoints: "45,745", overlap: "Best Seller" },
        { id: 2, image: "https://m.media-amazon.com/images/I/81uBzbSP1+L._AC_UL320_.jpg", desc: "Apple AirPods Pro (2nd Gen) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio MagSafe Charging Case (Lightning) Bluetooth Headphones for iPhone", feedback: "/images/slides/stars.jpg", feedbackpoints: "45,745", overlap: "Best Seller" },
        { id: 3, image: "https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_UL480_QL65_.jpg", desc: "Apple AirPods Pro (2nd Gen) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio MagSafe Charging Case (Lightning) Bluetooth Headphones for iPhone", feedback: "/images/slides/stars.jpg", feedbackpoints: "45,745", overlap: "Best Seller" },
        { id: 4, image: "https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_UL480_QL65_.jpg", desc: "Apple AirPods Pro (2nd Gen) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio MagSafe Charging Case (Lightning) Bluetooth Headphones for iPhone", feedback: "/images/slides/stars.jpg", feedbackpoints: "45,745", overlap: "Best Seller" },
        { id: 5, image: "https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_UL480_QL65_.jpg", desc: "Apple AirPods Pro (2nd Gen) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio MagSafe Charging Case (Lightning) Bluetooth Headphones for iPhone", feedback: "/images/slides/stars.jpg", feedbackpoints: "45,745", overlap: "Best Seller" },
        { id: 6, image: "https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_UL480_QL65_.jpg", desc: "Apple AirPods Pro (2nd Gen) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio MagSafe Charging Case (Lightning) Bluetooth Headphones for iPhone", feedback: "/images/slides/stars.jpg", feedbackpoints: "45,745", overlap: "Best Seller" },
        { id: 7, image: "https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_UL480_QL65_.jpg", desc: "Apple AirPods Pro (2nd Gen) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio MagSafe Charging Case (Lightning) Bluetooth Headphones for iPhone", feedback: "/images/slides/stars.jpg", feedbackpoints: "45,745", overlap: "Best Seller" },
        { id: 7, image: "https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_UL480_QL65_.jpg", desc: "Apple AirPods Pro (2nd Gen) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio MagSafe Charging Case (Lightning) Bluetooth Headphones for iPhone", feedback: "/images/slides/stars.jpg", feedbackpoints: "45,745", overlap: "Best Seller" }


    ]
    const router = useRouter();

    const handleRouteCart = () => {
        router.push("/cart");
    }
    const Item = ({ item }) => {
        return (
            <div className='electronic_wrapper'>
                <div className='electronicitem_img' onClick={handleRouteCart}>
                    <img src={item.image} alt='' />
                    <div className='overlapText'>
                        {item.overlap}
                    </div>

                </div>
                <div className='blog_footer'>


                    <div className='desc'>
                        {item.desc}
                    </div>
                    <div className='feedback'>
                        <img src={item.feedback} alt='' />
                        <span>{item.feedbackpoints}</span>
                    </div></div>

            </div>
        )
    }
    return (
        <div>
            <div className='heading'>
                <span className='title'>Electronics</span>
                <span>Shop home entertainment,TVs,home audio,headphones,cameras,accessories and more</span>
                <div className='results'>
                    1-12 of over 70,000 results for Electronics
                </div>
            </div>

            <div className='electronic_items'>
                {Electronics?.map((item) => <Item item={item} />)}
            </div>
        </div>
    )
}

export default Categories
