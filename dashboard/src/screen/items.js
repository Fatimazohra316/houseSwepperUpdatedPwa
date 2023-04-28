import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import image from "../images/star.png"


function CommercialItems(){
    const location = useLocation();
    const navigate = useNavigate()

    function serviceMove(data){
      // console.log(data);
      navigate("/booking",{
        state : data
      })
    }
  
    //  console.log(location.state);
    return(
        <div className="container mainDiv">
           <div className="itemDiv">
           <div><img className="itemImage" src={location.state.service_image}/></div>
           <div className="cleaningDiv">
           <div className="cleanings">{location.state.service_name}</div>
           <div className="price">$ {location.state.service_price} / Hour</div>
           <div className="buttonsDiv">
            <select className="durationButton">
              <option>1 Hour Duration</option>
              <option>2 Hour Duration</option>
              <option>3 Hour Duration</option>
              <option>4 Hour Duration</option>
              <option>5 Hour Duration</option>
              <option>6 Hour Duration</option>
              <option>7 Hour Duration</option>
              <option>8 Hour Duration</option>
              <option>9 Hour Duration</option>
              <option>10 Hour Duration</option>
            </select>
            <button className="durationsButton"><img src={image}/> {location.state.service_rating} Rating</button>
            </div>
           </div>
           </div>
           <div className="description">Description</div>
           <div className="des">{location.state.service_description}</div>
           <div className="continueDiv"><button onClick={()=>serviceMove(location.state)} className="btn continueButton">Continue</button></div>
           
        </div>
        
    )
}



export default CommercialItems;