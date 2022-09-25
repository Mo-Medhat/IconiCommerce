import React, { useContext } from 'react'
import { APIContext } from './../Context/APIContext';
import Slider from "react-slick";

function FlashDeals() {
  const {flashData, count, Increment, addToCart} = useContext(APIContext)

  const NextArrow = (props) => {
    const { onClick } = props
    return(
      <div className='control-btn btn-next' onClick={onClick}>
        <buuton className="next">
            <i className='fa fa-long-arrow-alt-right'></i>
        </buuton>
      </div>
    )
  }
  const PrevArrow = (props) => {
    const { onClick } = props
    return(
      <div className='control-btn btn-prev' onClick={onClick}>
        <buuton className="prev">
            <i className='fa fa-long-arrow-alt-left'></i>
        </buuton>
      </div>
    )
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 552,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        }
      },
    ]
  };

  return <>
    <div>
      <div className="headline pt-3 d-flex align-items-center">
      <i class="fa-solid fa-bolt fa-fw fa-sm "></i>
      <h4 className='mb-0 fw-bold'>Flash Deals</h4>
      </div>
      <div className="cards my-3">
      <Slider {...settings}>
      {flashData.map((card, id) => <>
        <div className="productCard" key={id}>
          <div className="saleProduct">
            <p className='mb-0'>{card.discount}% Off</p>
          </div>
          <div className="productImg">
            <img className='w-100' src={card.cover} alt={`${card.name} Product`} />
          </div>
          <div className="desc">
          <div className="productLike">
            <h5 className='mb-0'>{count}</h5>
            <i  onClick={Increment}  class="fa-regular fa-heart"></i>
          </div>
          <div className="productTitle">{card.name}</div>
          <div className="rate d-flex">
          <i class="fa-solid fa-star fa-fw"></i>
          <i class="fa-solid fa-star fa-fw"></i>
          <i class="fa-solid fa-star fa-fw"></i>
          <i class="fa-solid fa-star fa-fw"></i>
          <i class="fa-solid fa-star fa-fw"></i>
          </div>
          <div className="price"><h5>${card.price}.00</h5>
          <span className='btn-special btnPlus' onClick={() => addToCart(card)} ><i class="fas fa-plus"></i></span>
          </div>
          </div>
        </div>
      </>)}
      </Slider>
      </div>
    </div>
  </>
}

export default FlashDeals