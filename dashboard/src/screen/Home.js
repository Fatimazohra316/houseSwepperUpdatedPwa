import React, { useState } from "react";
import houseman from "../images/houseman.png";
import officecleaning from "../images/officecleaning.png"
import { useNavigate } from "react-router-dom";
import residentialCleaning from "../images/residential.jpg";
import commercialCleaning from "../images/commercial.jpg" ;
import pin from "../images/pin.png";
import phone from "../images/phone-call.png";
import email from "../images/email.png";
import remove from "../images/remove.png";


function Home() {
  const [contactSet,setContact] = useState(false)
  const navigate = useNavigate()
    return(
      <div className="container">
        <div className="cardResidential">
          <div className="residentialCard">
            <div>
              <img className="residential" src={residentialCleaning}/>
            </div>
            <div className="residentialDiv">
              <h3 className="residentialCleaning">Residential Cleaning</h3>
              <p className="residentialpera">
              We understand that every home and every client has unique cleaning needs. That's why we offer customized cleaning plans tailored to meet your specific requirements. Our cleaning plans are flexible and can be adjusted to fit your schedule and budget.
              </p>
              <div className="residentialButton">
              <button className="chooseButton" onClick={()=>navigate('/myhome')}>Choose Services</button>
              <button onClick={()=>setContact(true)} className="contactButton">Contact us</button>

            </div>
            </div>
          </div>
          <div className="residentialCard">
            <div>
              <img className="residential" src={commercialCleaning}/>
            </div>
            <div className="residentialDiv">
              <h3 className="residentialCleaning">Commercial Cleaning</h3>
              <p className="residentialpera">
              We understand that every business and every client has unique cleaning needs. That's why we offer customized cleaning plans tailored to meet your specific requirements. Our cleaning plans are flexible and can be adjusted to fit your schedule and budget. 
              </p>
              <div className="residentialButton">
              <button  className="chooseButton" onClick={()=>navigate('/innercommercial')}>Choose Services</button>
              <button onClick={()=>setContact(true)} className="contactButton">Contact us</button>


            </div>
            </div>
          </div>
           
         
        </div>
        {contactSet?<div className="contactBox">
          <div className="remove">
            <img onClick={()=>setContact(false)} src={remove}/>
          </div>
          <div className="contactBoxInner"> 
             <div>
              <h3 className="getTouch">Get in Touch with us</h3>
              <input className="contactInput" placeholder="Full name"/>
              <input className="contactInput" placeholder="Email"/>
              <input className="contactInput" placeholder="Phone"/>
              <div><select className="contactInput">
                <option value="" disabled selected>Select your subject</option>
                <option>Residential Cleaning</option>
                <option>Commerial Cleaning</option>

              </select></div>
              <textarea placeholder="Enter your Query" rows="5" className="contactInput"></textarea>
             </div>
             <div>
             <h3 className="getTouch">Contact us</h3>
             <div className="contactDiv">
              <div><img src={pin}/> </div>
              <p>Office no 123 street abc xyz road Ontario Canada</p>
              </div>
             <div className="contactDiv">
              <div><img src={phone}/></div>
              <div>
              <p>+1 33128823728</p>
              <p>+1 96547568579</p>
              </div>
              </div>
             <div className="contactDiv">
              <div><img src={email}/></div>
              <div>
              <p>house@gmail.com</p>
              <p>housesweeper@gmail.com</p>
              </div>
              </div>
             </div>
          </div>

        </div> : null}
      </div>
    )
 
}



export default Home;