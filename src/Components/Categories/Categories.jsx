import React from 'react'


function Categories() {
  const data = [
    {
      cateImg: "./images/category/cat1.svg",
      cateName: "Fashion",
    },
    {
      cateImg: "./images/category/cat2.svg",
      cateName: "Electronic",
    },
    {
      cateImg: "./images/category/cat3.svg",
      cateName: "Cars",
    },
    {
      cateImg: "./images/category/cat4.svg",
      cateName: "Home & Garden",
    },
    {
      cateImg: "./images/category/cat5.svg",
      cateName: "Gifts",
    },
    {
      cateImg: "./images/category/cat6.svg",
      cateName: "Music",
    },
    {
      cateImg: "./images/category/cat7.svg",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "./images/category/cat8.svg",
      cateName: "Pets",
    },
    {
      cateImg: "./images/category/cat9.svg",
      cateName: "Baby Toys",
    },
    {
      cateImg: "./images/category/cat10.svg",
      cateName: "Groceries",
    },
    {
      cateImg: "./images/category/cat11.svg",
      cateName: "Books",
    },
  ]
  
  
  return <>
  <section className="col-12 col-md-4">
  <div className='categoriesSection'>
    <div className="categoriesItems">
    {data.map((ele, id) => <><div className='cate' key={id}> 
      <div><img className='cateImages' src={ele.cateImg} alt={ele.cateName} /></div>  
      <h5>{ele.cateName}</h5>
      </div></>)}
    </div>
  </div>
  </section>

  </>
}

export default Categories