import React from 'react'
import Ddata from './../Data/DData';
import Slider from "react-slick";

function Discount() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        responsive: [
           
            {
              breakpoint: 976,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 370,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 260,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

  return <>
    <div className="headline pt-3 d-flex align-items-center justify-content-between">
    <div className='d-flex align-items-center'>
        <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
        <h4 className='mb-0 ms-1 fw-bold'>Big Discount</h4>
        </div>
        <span className='viewAll'>View All <i class="fa-solid fa-caret-right"></i></span>
    </div>
    <div className='DiscoBox'>
        <div className="">
        <Slider {...settings}>
            {
            Ddata.map((disco, id) => <>
                <div className="" key={id}>
                    <div className="discoItem">
                        <div className="img">
                            <img className='w-100' src={disco.cover} alt={disco.name} />
                        </div>
                        <div className="descDisco ">
                            <h5>{disco.name}</h5>
                            <span>{disco.price}</span>
                        </div>
                    </div>
                </div>
                </>
                )}
        </Slider>
        </div>
    </div>
  </>
}

export default Discount