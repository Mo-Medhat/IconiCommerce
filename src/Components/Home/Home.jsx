import React from 'react'
import Categories from './../Categories/Categories';
import SliderHome from './../SliderHome/SliderHome';
import FlashDeals from './../FlashDeals/FlashDeals';
import TopCategory from './../TopCategory/TopCategory';
import NewArrivals from './../NewArrivals/NewArrivals';
import Discount from './../Discount/Discount';
import Shop from './../Shop/Shop';
import Announcement from '../Announcement/Announcement';
import Wrapper from './../Wrapper/Wrapper';

function Home() {
  return <>
    <section className='HomeSection mt-3'>
      <div className="container-lg container-fluid">
          <div className="row flex-md-row flex-column-reverse">
          <Categories/>
          <SliderHome/>
        </div>
      </div>
    </section>
    <section className='FlashSection bgSection'>
      <div className="container-lg container-fluid">
        <FlashDeals/>
      </div>
    </section>
    <section className='TopCateSection bgSection'>
      <div className="container-lg container-fluid">
      <TopCategory/>
      </div>
    </section>
    <section className='NewArrSection bgSection'>
      <div className="container-lg container-fluid">
      <NewArrivals/>
      </div>
    </section>
    <section className='DiscountSection bgSection'>
      <div className="container-lg container-fluid">
      <Discount/>
      </div>
    </section>
    <section className='ShopSection bgSection'>
      <div className="container-lg container-fluid">
      <Shop/>
      </div>
    </section>
    <section className='ShopSection bgSection'>
      <div className="container-lg container-fluid">
      <Announcement/>
      </div>
    </section>
    <section className='ShopSection bgSection'>
      <div className="container-lg container-fluid">
      <Wrapper/>
      </div>
    </section>
  </>
}

export default Home