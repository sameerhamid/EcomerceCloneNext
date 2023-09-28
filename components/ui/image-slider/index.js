import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import React from 'react'

const DemoCarousel = (props) => {
  return (
    <Carousel showThumbs={false} autoPlay={props.autoPlay} infiniteLoop={props.infiniteLoop} showStatus={false}>
    {props.slides.map((e, index) => {
      return (
        <div key={index}>
        <Image  src={e} width={props.slideWidth} height={props.slideHeight} alt='' />
        <p className="legend">Slide</p>
    </div>
      )
    })}
</Carousel>
  )
}

export default DemoCarousel;