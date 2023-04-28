import React from "react";
import handImage from "../images/whitehand.png";
import laundary from "../images/laundary.png";



function Historyy(){
    return(
        <div className="historyPage"> 
           <h1 className="historyHeading">History</h1>
           <div className="historyDesign">
                <div>
                    <p className="historyService">
                        <img src={handImage} />
                        <span>Service Name</span>
                    </p>
                </div>
                <div className="historyDiv">
                    <p>Booking Id</p>
                    <p>Date</p>
                    <p>Time</p>

                    <p>Status</p>
                    <p>Total Price</p>
                    <p className="hideFont">dhfkdsfh</p>
                </div>
            </div>
            <div className="historyDesigns">
                <div>
                    <p>
                        <img src={laundary} />
                        <span>Laundary</span>
                    </p>
                </div>
                <div className="historyDivs">
                    <p>#16</p>
                    <p>9/19/2022</p>
                    <p>4:06 PM</p>

                    <p>
                        <button id="nname">
                           completed

                        </button>
                    </p>
                    <p>57 $</p>
                    <p className="link">View Details</p>

                </div>
            </div>
            <div className="historyDesigns">
                <div>
                    <p>
                        <img src={laundary} />
                        <span>Laundary</span>
                    </p>
                </div>
                <div className="historyDivs">
                    <p>#16</p>
                    <p>9/19/2022</p>
                    <p>4:06 PM</p>

                    <p>
                        <button id="cancel">
                           cancel

                        </button>
                    </p>
                    <p>57 $</p>
                    <p className="link">View Details</p>

                </div>
            </div>
        </div>
    )
}


export default Historyy;