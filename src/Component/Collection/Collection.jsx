import React from 'react'

export default function Collection() {
  return (
    <>
    <div className="tab-sec " data-wow-duration="2s" data-wow-delay="5s">
          <div className="tab-inner">
            <img className="d-block m-auto" src="main/assets/img/donwait.png" alt="Second slide"/>
            <h3>Shopping Everyday</h3>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="one" data-toggle="tab" href="#one" role="tab" aria-controls="home" aria-selected="true">All</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="two" data-toggle="tab" href="#two" role="tab" aria-controls="profile" aria-selected="false">Watches</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="three" data-toggle="tab" href="#three" role="tab" aria-controls="contact" aria-selected="false">Camera</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="four" data-toggle="tab" href="#four" role="tab" aria-controls="contact" aria-selected="false">Bags</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="five" data-toggle="tab" href="#five" role="tab" aria-controls="contact" aria-selected="false">Lighting</a>
                  </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="one">
                    <div className="d-flex ec-home-shopping-products">
                        <div className="c-img-1 pr-3 wow  animate__animated animate__fadeInLeft">
                            <a  href="./main/pages/product-list.html" >
                            <img className="d-block " src="main/assets/img/c-img-1.png" alt="Second slide"/>
                            </a>
                        </div>
                        <div className="c-img-2 wow animate__animated animate__fadeInUp">
                            <a  href="./main/pages/product-list.html" >
                            <img className="d-block " src="main/assets/img/c-img-2.png  " alt="Second slide"/>
                            </a>
                            <a  href="./main/pages/product-list.html" >
                            <img className="d-block mt-3 " src="main/assets/img/c-img-2.png  " alt="Second slide"/>
                            </a>
                        </div>
                        <div className="c-img-3 pl-3 wow animate__animated animate__fadeInLeft">
                            <img className="d-block  " src="main/assets/img/c-img-3.png " alt="Second slide"/>
                        </div>
                    </div>
                   
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="two">...</div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="three">...</div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="four">...</div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="five">...</div>
              </div>
          </div>
            
        </div>
    </>
  )
}
