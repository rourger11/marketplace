import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Banner(e) {

  const [sliderData, setSliderData] = useState([]);


  const payload = { storeId: "1" };
  const token = "zx647qcilhrmqg1udt56ba82d4s34ck8";
  const url = "http://10.8.10.65/magento/rest/V1/getHomeContent";

  useEffect(() => {
    const bannerData = async () => {
      await axios(url, {
        method: "POST",
        data: payload,

        header: {
          "Content-Length": "<calculated when request is sent>",
          Host: "<calculated when request is sent>",
          "User-Agent": "PostmanRuntime/7.29.2",

          " Accept": "*/*",
          Connection: "keep-alive",
          "Accept-Encoding": "gzip, deflate, br",
          "Content-Type": "application/json",
         " Authorization": `Bearer ${token}`,
        },
      })
        .then((res) => {
          setSliderData(res.data[0].slider_banner);

        })
        .catch((error) => {
          console.log("this is error", error);
        });
    };
    bannerData();
  }, []); 

  const SlideChange = (e) => {
    console.log(e.target);
  };


  return (
    <>
      <div className="main-banner">
        <div className="banner-container">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators carousel-indicators-numbers">
              <li
                data-target="#carousel-example-generic"
                data-slide-to="0"
                id="1"
                className="active"
              >
                01
              </li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="1"
                id="2"
              >
                02
              </li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="2"
                id="3"
              >
                03
              </li>
            </ol>

            <div className="carousel-inner">
              <div className="carousel-item active">
                            
                        <Carousel
                          interval={3000}
                          style={{objectfit:"cover",width:"100%",height:"70vh"}}
                          onChange={SlideChange}
                          pause={false}
                          indicators={false}
                          controls={false}
                          onSelect={SlideChange}

                        >
                          {sliderData.map((slide,index) => {
                  return (
                          <Carousel.Item key={index}>
                            <img
                              className="d-block "
                              src={slide.image}
                              name={slide.name}
                              style={{objectfit:"cover",height:"70vh",width:"100vw"}}
                              id="1"
                              alt="slide1"
                              value="item"


                            />
                  
                          </Carousel.Item>
                                      );
                                    })} 
                        </Carousel>
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

