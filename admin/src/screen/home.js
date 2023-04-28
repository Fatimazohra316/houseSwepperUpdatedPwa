import React from "react";
import handImage from "../images/whitehand.png";
import laundary from "../images/laundary.png"




function Home() {
    return (
        <div className="homePage">
            <h1 className="homeHeading">Welcome <span>Admin!</span></h1>
            <div className="buttonPart">
                <button className="pending">Pending</button>
                <button className="completed">Complete</button>
                <button className="completed">Cancel</button>
            </div>
            <div className="serviceDesign">
                <div>
                    <p className="handService">
                        <img src={handImage} />
                        <span>Service Name</span>
                    </p>
                </div>
                <div className="bookingDivs">
                    <p>Booking Id</p>
                    <p>Date</p>
                    <p>Time</p>

                    <p>Status</p>
                    <p>Total Price</p>
                    <p className="hideFont">dhfkdsfh</p>
                </div>
            </div>
            <div className="serviceDesigns">
                <div>
                    <p>
                        <img src={laundary} />
                        <span>Laundary</span>
                    </p>
                </div>
                <div className="bookingDivss">
                    <p>#16</p>
                    <p>9/19/2022</p>
                    <p>4:06 PM</p>

                    <p>
                        <select >
                            <option value="pending">Pending</option>
                            <option value="complete">Complete</option>
                            <option value="cancel">Cancel</option>

                        </select>
                    </p>
                    <p>57 $</p>
                    <p className="link">View Details</p>

                </div>
            </div>
            <div className="serviceDesigns">
                <div>
                    <p>
                        <img src={laundary} />
                        <span>Laundary</span>
                    </p>
                </div>
                <div className="bookingDivss">
                    <p>#16</p>
                    <p>9/19/2022</p>
                    <p>4:06 PM</p>

                    <p>
                        <select >
                            <option value="pending">Pending</option>
                            <option value="complete">Complete</option>
                            <option value="cancel">Cancel</option>

                        </select>
                    </p>
                    <p>57 $</p>
                    <p className="link">View Details</p>

                </div>
            </div>


        </div>
    )
}



export default Home;