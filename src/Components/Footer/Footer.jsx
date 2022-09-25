import React from 'react'

function Footer() {
  return <>
    <footer>
      <div className="row g-sm-3">
      <div className="col-lg-3 col-md-6">
        <div className="footerInfo">
          <h1>Iconic</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='d-flex flex-wrap mb-2'>
                <div className='icons d-flex justify-content-center align-items-center me-2 mb-1'>
                  <i class='fa-brands fa-google-play me-1'></i>
                  <span>Google Play</span>
                </div>
                <div className='icons d-flex justify-content-center align-items-center mb-1'>
                  <i class='fa-brands fa-app-store-ios me-1'></i>
                  <span>App Store</span>
                </div>
              </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
          <div className="footerInfo">
          <h2>About Us</h2>
          <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
        </div>            
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="footerInfo">
        <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="footerInfo">
        <h2>Contact Us</h2>
            <ul>
              <li>70 Washington Square South, New York, NY 10012, United States </li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
        </div>
      </div>
      </div>
    </footer>
  </>
}

export default Footer