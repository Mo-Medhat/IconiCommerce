import React from 'react'
import Slider from "react-slick";
import Tdata from './../Data/TData';

function TopCategory() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
              breakpoint: 864,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 552,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
      };    
  return <>
  <div className="headline pt-3 d-flex align-items-center justify-content-between">
    <div className='d-flex align-items-center'>
        <i className='fa-solid fa-table-cells-large fa-fw fs-4'></i>
        <h4 className='mb-0 fw-bold'>Top Categories</h4>
    </div>
    <span className='viewAll'>View All <i class="fa-solid fa-caret-right"></i></span>
  </div>
  <div className="categoriesBox my-3">
     <Slider {...settings}>
    {
        Tdata.map((singleCate , id) => <>
            <div className="cateBox" key={id}>
                <div className="cateName d-flex justify-content-between align-items-center">
                    <h5 className='proName'>{singleCate.para}</h5>
                    <div className="orders">{singleCate.desc}</div>
                </div>
                <div className="img">
                    <img className='w-100' src={singleCate.cover} alt={singleCate.para} />
                </div>
            </div>
        </>)
    }
    </Slider>
  </div>
  </>
}

export default TopCategory