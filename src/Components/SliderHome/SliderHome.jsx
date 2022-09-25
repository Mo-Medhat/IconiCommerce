import React from 'react'
import Sdata from './../Data/SData';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SliderHome() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
      
    };

  return <>
  <section className='col-12 col-md-8 slideSectionW'>
    <div className="container-md">
      <div className="homeSlider mx-md-5 ">
      <Slider {...settings}>
        {Sdata?.map((slide, idx) => <>{
          <div key={idx} className="d-flex">
            <div className="leftSide">
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
              <button className='btnStyle'>Visit Collections</button>
            </div>
            <div className="rightSide"><img className='w-100' src={slide.cover} alt={slide.title} /></div>
          </div>
          }</>)
        }
      </Slider>
      </div>
    </div>
  </section>

  </>
}

export default SliderHome