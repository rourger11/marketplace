import React,{useEffect,useState} from "react";
import axios from "axios"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {NavLink }from 'react-router-dom'
import Carousel from "react-grid-carousel";
// import {Carousel} from 'react-bootstrap'
import './Blog.style.css'
export default function Blogs() {
 
const [activeIndex, setActiveIndex] = useState(0);

 const [blogs,setBlogs]=useState([]);

  const payload = { storeId: "1" };

  const token = "zx647qcilhrmqg1udt56ba82d4s34ck8";
  const url = "http://10.8.10.65/magento/rest/V1/getHomeContent";

  useEffect(() => {
    const blogData = async () => {
      await axios(url, {
        method: "POST",
        data: payload,

        header: {
          "Content-Length": "<calculated when request is sent>",
          "Host": "<calculated when request is sent>",
          "User-Agent": "PostmanRuntime/7.29.2",
          " Accept": "*/*",
          "Connection": "keep-alive",
          "Accept-Encoding": "gzip, deflate, br",
          "Content-Type": "application/json",
         " Authorization": `Bearer ${token}`,
        },
      })
        .then((res) => {
          setBlogs(res.data[0].blogs);

        })
        .catch((error) => {
          console.log("this is error", error);
        });
    };
    blogData();
  }, []);
  console.log("lasdisadiasdasi",blogs)

  const slidePrev = () => {
    activeIndex==0?(
      setActiveIndex(blogs.length-1)):
    setActiveIndex(activeIndex - 2);
            };

  const slideNext = () => {
    activeIndex==blogs.length-1?(
      setActiveIndex(0))
        : setActiveIndex(activeIndex + 2)

  };



  return (
    <>
      <div className="sec-blog">
        <div className="sec-blog-inner">
          <h3>LATEST BLOG</h3>

          <div className="container-fluid">
            <div
              id="carouselExample"
              className="carousel slide"
              data-ride="carousel"
              data-interval="9000"
            >
              <div className="carousel-control-outer">
                <a
                  className="carousel-control-prev"
                  // href="#carouselExample"
                  role="button"
                  // data-slide="prev"
                  onClick={slidePrev}
                >
                  <i>
                    <FaAngleLeft className="mb-1" />
                  </i>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next text-faded"
                  // href="#carouselExample"
                  role="button"
                  // data-salide="next"
                  onClick={slideNext}

                >
                  <i>
                    <FaAngleRight className="mb-1" />
                  </i>
                  <span className="sr-only">Next</span>
                </a>
              </div>

              <div className="carousel-inner row w-100 mx-auto" role="listbox">
                <div className="carousel-item   active">

                  <Carousel className="row"
                    cols={3}
                    rows={1}
                    gap={30}
                    loop={true}
                    autoplay={6000}
                    hideArrow={true}
                    activeIndex={activeIndex}
                    blogs={blogs}
                    infinite={true}



                  >
                  {blogs.map((ele,itm)=>{
                    return(

                      <Carousel.Item key={itm}className="col-md-4">

                      <a href="#">
                        <div className="blog-item">
                          <img
                            // style={{width:"50%",height:"30vh"}}
                            className="d-block"
                            src={ele.image}
                            alt="blog"
                            />
                          <div className="blog-dec">
                            <label>{ele.short_description}</label>
                            <h4>
                              {ele.post_content}
                            </h4>
                          </div>
                        </div>
                      </a>
                    </Carousel.Item>
                            ) 
                          })}
                        
                  </Carousel >

                   

      
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
