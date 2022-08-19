import React,{useEffect,useState} from 'react'
import axios from 'axios';

export default function Categories() {

  const [categories,setCategories]=useState([]);
  const payload = { storeId: "1" };
  const token= "zx647qcilhrmqg1udt56ba82d4s34ck8"
  const url = "http://10.8.10.65/magento/rest/V1/getHomeContent";


  useEffect(() => {
    const category = async () => {
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
          setCategories(res.data[1].categories);

        })
        .catch((error) => {
          console.log("this is error", error);
        });
    };
    category();
  }, []);

  const newData = categories.filter((item)=>{
    return(
      item.entity_id>2
    )
  
  });

  return (
    <>
     <div className="container-fluid">
            <div className="add-slider my-4 pb-5 ">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                       
                        <div className="row add-slider-row">
                          {newData.map((product,keys)=>{
                            return(
                              <div  key={keys} className="col-md-4 animate__animated animate__fadeInUp">
                              <a  href="./main/pages/product-list.html" >
                               <div className="slider-bg-card">
                                   <img className="d-block" src={product.image} alt="product slide"/>
                                   
                               </div>
                               <h3>{product.name}</h3>
                               <label>electronics </label>
                             </a>
                           </div>

                            )
                          })}
                           
                           
                            
                        </div>
                      </div>
                     
                    </div>
                  </div>
             </div>
         </div>
    </>
  )
}
