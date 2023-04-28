import axios from "axios";
import React, { useEffect, useState } from "react";
import image2 from "../images/view.png";
import image3 from "../images/rating.png";
import image4 from "../images/rating4.PNG";
import image5 from "../images/rating3.PNG";
import image6 from "../images/rating2.PNG";
import image7 from "../images/rating1.PNG";
import { useNavigate } from "react-router-dom";
import loader from "../images/loader.gif"


function InnerCommercial(){
    const [item,setItem] = useState([]);
    const [isloading,seTIsLoading] = useState(true)
    const navigate = useNavigate()
    
    const getData = async ()=>{
        
        const response = await axios.post("https://cleaningapp.8tkt.com/api/getcommercial");
        const json = await response;
        setItem(json.data.data);
        seTIsLoading(false)
        // .then((success) => {
        //     // console.log(success.data.data);
        //     setItem(success.data.data)
        //     // console.log(item);
        //  }).catch((err) => {
        //     // console.log(err);
        //  })
       
    }

    useEffect(()=>{
       getData();
    },[])
    function moveData(data) {
        navigate("/commericalitems", {
           state: data
  
        })
    }
    return(
        <div className="container">
            {isloading ? <div><img className="loaderImage" src={loader}/></div> :   <div >
            
            <div className="secondMainDiv">
              {item ? item.map((e) => {
                  return (
                     <div onClick={()=>moveData(e)}   className="secondCard">
                        <div className="secondService" style={{
                           backgroundImage: `url(${e.service_image})`,
                           backgroundSize: "cover",
                        }}>
                           <button className="categoryButton">{e.service_name}</button>
                           <button className="categorybutton"> $ {e.service_price}</button>

                        </div>
                      <div className="washroomDiv">
                      <div className="ratingDiv"><img className="starrating" src={e.service_rating  == 5 ? image3 : e.service_rating  == 4 ? image4 : e.service_rating  == 3 ? image5 : e.service_rating  == 2 ? image6 : e.service_rating  == 1 ? image7 : null    }/> <span className="rating">{e.service_rating}</span></div>
                        <p>{e.service_name}</p>
                      </div>
                     </div>
                  )
               }) : <h1 className="text-center">Please Wait...</h1>}
            </div>
        </div> }
        </div>
    )
}


export default InnerCommercial;