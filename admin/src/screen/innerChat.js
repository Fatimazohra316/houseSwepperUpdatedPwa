import React from "react";
import chat from "../images/chats.png";
import housebubble from "../images/housebubble.png";
import threeDots from "../images/threeDots.png";
import search from "../images/search.png";
import image7 from "../images/sendButton.png";



function ChatInner() {
    return (
        <div className="innerChat">
            <h1 className="chatHeading"><img src={chat} /> <span>Chat Support</span> </h1>
            <div className="supportDiv">
                <div className="chatPart">
                    <img src={housebubble} />
                    <span>HOUSE SWEEPER SUPPORT</span>
                </div>
                <div>
                    <img className="search" src={search} />
                    <img src={threeDots} />
                </div>

            </div>
            <div className="btnDiv"><button className="btn todayButton">Today</button></div>
            <div className="chatting">
                <div className="chatBubble">
                    <div>
                        <img className="image5" src={housebubble} />
                    </div>
                    <div class="talk-bubble tri-right round btm-left">
                        <div class="talktext">
                            <p>Hello</p>
                        </div>

                    </div>

                </div>
                <div className="time">6:31 PM</div>
                <div className="chatBubble">
                    <div>
                        <img className="image5" src={housebubble} />
                    </div>
                    <div class="talk-bubble tri-right round btm-left">
                        <div class="talktext">
                            <p>Are you Available</p>
                        </div>
                    </div>
                </div>
                <div className="time">6:31 PM</div>
                <div className="chatBubble">
                    <div>
                        <img className="image5" src={housebubble} />
                    </div>
                    <div class="talk-bubble tri-right round btm-left">
                        <div class="talktext">
                            <p> We are here, to Inform you that
                                your report is Registered.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="time">6:31 PM</div>
                <div className="bubbleDiv">
                    <div className="chatBubbles">
                        <div className="talk-bubbles round tri-right btm-right">
                            <div className="talktexts">
                                <p>hello world</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="messagess">
                <input  placeholder="Write your message" className="messageDiv"/>
                <img  src={image7}/>
            </div>
        </div>
            
        </div>
    )
}


export default ChatInner;