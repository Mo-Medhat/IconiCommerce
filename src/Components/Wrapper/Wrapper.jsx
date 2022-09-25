import React from 'react'

function Wrapper() {
    const data = [
        {
          cover: <i class='fa-solid fa-truck-fast fa-fw fa-xl'></i>,
          title: "Worldwide Delivery",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='fa-solid fa-id-card fa-fw fa-xl'></i>,
          title: "Safe Payment",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='fa-solid fa-shield fa-fw fa-xl'></i>,
          title: "Shop With Confidence ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='fa-solid fa-headset fa-fw fa-xl'></i>,
          title: "24/7 Support ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
      ]

    return <>
    <div className="wrapper">
        <div className="row">
        {
            data.map((wrap, id) => <>
                <div className="col-lg-3 col-sm-6" key={id}>
                    <div className="wrapperItem text-center">
                        <div className="icon">
                            {wrap.cover}
                        </div>
                        <h5>{wrap.title}</h5>
                        <p>{wrap.decs}</p>
                    </div>
                </div>
            </>)
        }
        </div>
    </div>
  
  </>
}

export default Wrapper