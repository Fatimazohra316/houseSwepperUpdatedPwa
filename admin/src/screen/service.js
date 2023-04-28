import React, { useEffect, useState } from "react";
import handImage from "../images/hand.png";
import toilet from "../images/toilet.png";
import add from "../images/add.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import image3 from "../images/rating.png";
import image4 from "../images/rating4.PNG";
import image5 from "../images/rating3.PNG";
import image6 from "../images/rating2.PNG";
import image7 from "../images/rating1.PNG";
import bin from "../images/bin.png";
import cross from "../images/delete.png";




function Services() {
    const navigate = useNavigate();
    const [cleaning, setCleaning] = useState(true);
    const [category, setCategory] = useState(true);
    const [categories, setCategories] = useState([]);
    const [services,setServices] = useState([]);
    const [commercial,setCommercial] = useState([])

    function categoryDelete(cardData){
         const id = cardData.id;
         axios.post(`https://cleaningapp.8tkt.com/api/deletecategory/${id}`).then((success)=>{
            
         })
    }
    
    function deleteService(cardData){
         const id = cardData.id;
         axios.post(`https://cleaningapp.8tkt.com/api/deleteservice/${id}`).then((success)=>{
            console.log(success);
         })
    }
    function deleteCommercial(cardData){
         const id = cardData.id;
         axios.post(`https://cleaningapp.8tkt.com/api/deletecommercial/${id}`).then((success)=>{
            alert(success.data);
         })
    }
    


    const getData = () => {
        axios.post('https://cleaningapp.8tkt.com/api/categories').then((success) => {

            setCategories(success.data.data)
            console.log(success.data.data);
        }).then((error) => {
            console.log(error);
        })
        axios.post('https://cleaningapp.8tkt.com/api/services').then((success)=>{
            setServices(success.data.data)
        }).then((error)=>{
            console.log(error);
        })
        axios.post('https://cleaningapp.8tkt.com/api/getcommercial').then((success)=>{
            setCommercial(success.data.data)
        }).then((error)=>{
            console.log(error);
        })
    }
    useEffect(() => {
        getData();
    }, [])

    console.log(services);
    return (
        <div className="servicePage">
            <h1 className="serviceHeading">Services</h1>
            {/* <h3 className="cleaningService"><img src={handImage} /> <span>Cleaning Services</span></h3> */}
            <div className="buttons">
                <button onClick={() => setCleaning(true)} className={cleaning ? "residentialButton" : "commercialButton"}>Residential Cleaning</button>
                <button onClick={() => setCleaning(false)} className={cleaning ? "commercialButton" : "residentialButton"}>Commercial Cleaning</button>

            </div>
            {cleaning ?
                <div>
                    <div className="buttons">
                        <button onClick={() => setCategory(true)} className={category ? "residentialButton" : "commercialButton"}>Categories</button>
                        <button onClick={() => setCategory(false)} className={category ? "commercialButton" : "residentialButton"}>Services</button>

                    </div>
                    {category ? <div className="servicesItem">
                        <div className="cardMainDivs" >
                            {categories.map((element) => {
                                return (
                                    <div className="card-bodys" >
                                        <div className="cardHalfPart"><img className="img" src={element.category_icon} /></div>
                                        <div className="category">{element.category_name}</div>
                                        <img onClick={()=>categoryDelete(element)} className="bin" src={bin}/>
                                    </div>
                                )
                            })}

                            <div className="card-bodys" onClick={() => navigate('/innerservice')}>
                                <div className="cardHalfPart"><img className="img" src={add} /></div>
                                <div className="category">Add Service</div>
                            </div>

                        </div>

                    </div> : 
                    <div>
                    <div className="secondMainDiv">
                     {services.map((e) => {
                        return (
                           <div className="secondCard">
                            <img onClick={()=>deleteService(e)} className="cross" src={cross}/>
                              <div className="secondService" style={{
                                 backgroundImage: `url(${e.service_image})`,
                                 backgroundSize: "cover",
                              }}>
                                 <button className="categoryButton">{e.service_name}</button>
                                 <button className="categorybutton">{e.service_price}</button>
      
                              </div>
                            <div className="washroomDiv">
                            <div className="ratingDiv"><img className="starrating" src={e.service_rating  == 5 ? image3 : e.service_rating  == 4 ? image4 : e.service_rating  == 3 ? image5 : e.service_rating  == 2 ? image6 : e.service_rating  == 1 ? image7 : null    }/> <span className="rating">{e.service_rating}</span></div>
                              <p>{e.service_name}</p>
                            </div>
                           </div>
                        )
                     })}
                  </div>

                    <button onClick={()=>navigate("/innerservice")} className="addservices">Add Service</button>
                        
                        </div>}
                </div>
                : 
                <div>
                <div className="secondMainDiv">
                 {commercial.map((e) => {
                    return (
                       <div className="secondCard">
                        <img onClick={()=>deleteCommercial(e)} className="cross" src={cross}/>
                          <div className="secondService" style={{
                             backgroundImage: `url(${e.service_image})`,
                             backgroundSize: "cover",
                          }}>
                             <button className="categoryButton">{e.service_name}</button>
                             <button className="categorybutton">${e.service_price}</button>
  
                          </div>
                        <div className="washroomDiv">
                        <div className="ratingDiv"><img className="starrating" src={e.service_rating  == 5 ? image3 : e.service_rating  == 4 ? image4 : e.service_rating  == 3 ? image5 : e.service_rating  == 2 ? image6 : e.service_rating  == 1 ? image7 : null    }/> <span className="rating">{e.service_rating}</span></div>
                          <p>{e.service_name}</p>
                        </div>
                       </div>
                    )
                 })}
              </div>

                <button onClick={()=>navigate("/innerservice")} className="addservices">Add Commercial Cleaning</button>
                    
                    </div>}
        </div>
    )
}


export default Services;