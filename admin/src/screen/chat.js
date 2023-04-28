import React from "react";
import chat from "../images/chats.png";
import housebubble from "../images/housebubble.png";
import threeDots from "../images/threeDots.png";
import search from "../images/search.png";
import john from "../images/john.png";
import purpledot from "../images/purpleDot.png";
import { useNavigate } from "react-router-dom";

function Chat() {
    const navigate = useNavigate();
    return (
        <div className="chatPage">
            <h1 className="chatHeading"><img src={chat} /> <span>Chat Support</span> </h1>
            <div className="supportDiv">
                <div className="chatPart">
                    <img src={housebubble}/>
                    <span>HOUSE SWEEPER SUPPORT</span>
                </div>
                <div>
                 <img className="search" src={search}/>
                 <img src={threeDots}/>
                </div>

            </div>
            <div onClick={()=>navigate("/innerchat")} className="supportsDiv">
                <div className="johnPart">
                    <img src={john}/>
                    <span>John Doe</span>
                </div>
                <div>
                 <span  className="timeDiv">11:45 pm</span>
                 <img src={purpledot}/>
                </div>
               
              
            </div>
            <hr/>
            <div onClick={()=>navigate("/innerchat")} className="supportsDiv">
                <div className="johnPart">
                    <img src={john}/>
                    <span>John Doe</span>
                </div>
                <div>
                 <span  className="timeDiv">11:45 pm</span>
                 <img src={purpledot}/>
                </div>
               
                
            </div>
            <hr/>
           
        </div>
    )
}


export default Chat;