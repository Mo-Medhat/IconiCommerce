import React from 'react'

function CategoriesMob() {
    const data = [
        {
          cateImg: "./images/category/cat-1.png",
          cateName: "Apple",
        },
        {
          cateImg: "./images/category/cat-2.png",
          cateName: "Samasung",
        },
        {
          cateImg: "./images/category/cat-1.png",
          cateName: "Oppo",
        },
        {
          cateImg: "./images/category/cat-2.png",
          cateName: "Vivo",
        },
        {
          cateImg: "./images/category/cat-1.png",
          cateName: "Redimi",
        },
        {
          cateImg: "./images/category/cat-2.png",
          cateName: "Sony",
        },
      ]
      
      
  return <>
    <section className='categoriesSection'>
    <div className="categoriesItems shopStyle">
        <div className="headShop p-1">
        <h5>Brands</h5>
        <span></span>
        <h5>Shops</h5>
        </div>
        {data.map((brand, id) => <>
            <div className='cate cateShop' key={id}>
            <div><img className='w-100' src={brand.cateImg} alt={brand.cateName} /></div>
            <h5>{brand.cateName}</h5>
            </div>
        </>)}
        <div className="cateShop cateShopBtn my-5">
            <button>View All Brands</button>
        </div>
    </div>
    </section>
    </>
}

export default CategoriesMob