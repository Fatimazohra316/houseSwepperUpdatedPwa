import React, { useEffect, useState } from "react";
import image1 from "../images/calender.png"
import image2 from "../images/location.png"
import image4 from "../images/dottedline.png"
import image9 from "../images/verticalline.png"
import image5 from "../images/washrooms.png"
import image6 from "../images/check.png"
import image7 from "../images/ticks.png";
import image8 from "../images/profile.PNG"
import close from '../images/close.png'

import { json, useLocation, useNavigate } from "react-router-dom";
import { TurnLeftTwoTone } from "@mui/icons-material";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

function Booking() {
    let url = "https://cleaningapp.8tkt.com/api/booking";
    let url1 = "https://cleaningapp.8tkt.com/api/signin";
    const [count, setCount] = useState(1);
    const [page, setPage] = useState(true);
    const [page1, setPage1] = useState(false);
    const [page2, setPage2] = useState(false);
    const navigate = useNavigate();
    const [changeDiv, setChangeDiv] = useState(true)
    const [secondButton, setSecondButton] = useState(true)
    const [changeButton, setChangeButton] = useState(false)
    const [button3, setButton3] = useState(true)
    // const [email,setEmail] = useState('')
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [number, setNumber] = useState();
    const [address, setAddress] = useState("");
    const [coupon, setCoupon] = useState("");
    const [serviceName, setServiceName] = useState("");
    const [cross, setCross] = useState(false);
    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();
    const [fieldDates, setFieldDates] = useState("");
    const [fieldDate, setFieldDate] = useState(false);
    const [fieldTime, setFieldTime] = useState('');
    const [fieldTimes, setFieldTimes] = useState(false)
    const [fieldNumber, setFieldNumber] = useState('');
    const [fieldNumbers, setFieldNumbers] = useState(false)
    const [fieldAddress, setFieldAddress] = useState('');
    const [fieldAddresss, setFieldAddresss] = useState(false);
    const [fieldCount, setFieldCount] = useState('');
    const [fieldCounts, setFieldCounts] = useState(false)
    const [fieldServiceName, setFieldServiceName] = useState('');
    const [fieldServiceNames, setFieldServiceNames] = useState(false);
    const [check, setCheck] = useState(false)
    const [minDate, setMinDate] = useState('');
    const [selectedDates, setSelectedDates] = useState([]);
    const [user_id, setUser_id] = useState('');
    const [card_number, setCard_number] = useState('');
    const [exp_month, setExp_month] = useState('');
    const [exp_year, setExp_year] = useState('');
    const [cvc, setEvc] = useState('');
    const [amount, setAmount] = useState('');
    const [creditcard, setCreditcard] = useState(false);
    const [paymentdon, setPaymentdon] = useState(false);

    let email;
    let data;



    const [message, setMessage] = useState('');
    try {
        data = JSON.parse(localStorage.getItem('data'));

    } catch (e) {
        console.error('Error parsing JSON:', e);
        data = null;

    }
    // console.log(arr);
    console.log(data);
    useEffect(() => {


        const today = new Date().toISOString().split('T')[0];


        setMinDate(today);

    }, [])




    function submituser(e) {
        e.preventDefault();
        let data = new FormData();
        data.append("email", emailAddress);
        // console.log(email);
        data.append("cpass", password);
        // console.log(password);
        fetch("https://cleaningapp.8tkt.com/api/signin", {
            method: "POST",
            body: data

        }).then((response) => response.json())
            .then((data) => {
                localStorage.setItem("data", JSON.stringify(data.data))
                console.log(data);
                if (data.error) {
                    setMessage(data.error)
                    setCheck(true)
                }
                else if (data) {
                    setCross(false)





                }

            })



    }

    // console.log(emailAddress);
    const Location = useLocation()

    console.log(Location.state);

    let categoryName = Location.state.category_name;
    let sevice = Location.state.service_name;


    console.log(categoryName);
    console.log(sevice);
    // console.log(email);
    // console.log(locatiom.state);
    function addButton() {

        if (!date) {
            // alert("your date is missing")
            setFieldDates("Date is missing *");
            setFieldDate(true)
        }
        if (!time) {
            setFieldTime("Time is missing *");
            setFieldTimes(true);
        }
        if (!number) {
            setFieldNumber("Number is missing *");
            setFieldNumbers("true");
        }
        if (!address) {
            setFieldAddress("Address is missing *");
            setFieldAddresss("true");
        }
        else {
            setPage(false)
            setPage1(true)
            setChangeDiv(false)

        }


    }

    function backbutton() {
        setPage(true)
        setPage1(false)
        setChangeDiv(true)
    }

    function addstripe() {
        let totalamount = JSON.parse((Location.state.category_price ? Location.state.category_price : Location.state.service_price ? Location.state.service_price : null  ).replace(/\$/g, '')) * count;
        console.log(totalamount)
        let userid = JSON.parse(localStorage.getItem('data'))
        console.log(userid.id)
        const data = new FormData
        data.append("user_id", userid.id);
        data.append("card_number", card_number);
        data.append("exp_month", exp_month);
        data.append("exp_year", exp_year);
        data.append("cvc", cvc);
        data.append("amount", totalamount);

        fetch("https://cleaningapp.8tkt.com/api/stripepayment", {
            method: "POST",
            body: data
        }).then((response) => response.json()).then((data) => {
            console.log(data);
            if (data.receipt_url) {
                setCreditcard(false)
                setPaymentdon(true)
            }
            if (data.error) {
                console.log(data.error.card_number);
                alert("Invalid info");
            }
            // creditcard
        })
    }

    function addButton1() {
        if (!count) {
            // alert("your date is missing")
            setFieldCount("Service Quantity is missing *");
            setFieldCounts(true)
        }


        else {
            setPage1(false)
            setPage2(true)
            setSecondButton(false)
            setChangeButton(true)
            setButton3(false)
        }

    }
    function backButton2() {
        setPage1(true)
        setPage2(false)
        setSecondButton(true)
        setChangeButton(false)
        setButton3(true)
    }

    function addButton2() {
        let info = JSON.parse(localStorage.getItem('data'))
        console.log(info)
        if (data) {
            const data = new FormData
            data.append("serviceName", categoryName);
            data.append("categoryName", categoryName);
            data.append("email", info.email);
            data.append("coupon", coupon);
            data.append("address", address);
            data.append("date", date);
            data.append("time", time);
            data.append("quantity", count);
            data.append("phone", number);

            fetch(url, {
                method: "POST",
                body: data
            }).then((response) => response.json()).then((data) => {
                console.log(data);
            })
            setPage2(false)
            navigate("/confirmbooking")





        }
        else {
            setCross(true)


        }




    }
    function opens() {
        setCross(false)
    }
    function handleSubmit(event) {
        event.preventDefault();

    }

    function changeDate(value) {
        if (value == "morning") {
            setSelectedDates([
                { value: '5am', label: '5 AM' },
                { value: '6am', label: '6 AM' },
                { value: '7am', label: '7 AM' },
                { value: '8am', label: '8 AM' },
                { value: '9am', label: '9 AM' },
                { value: '10am', label: '10 AM' },
                { value: '11am', label: '11 AM' },
            ])


        }
        if (value == "afternoon") {
            setSelectedDates([{ value: '12pm', label: '12 PM' },
            { value: '1pm', label: '1 PM ' },
            { value: '2pm', label: '2 PM' },
            { value: '3pm', label: '3 PM' },
            { value: '4pm', label: '4 PM' },
            { value: '5pm', label: '5 PM' },
            ])


        }
        if (value == "evening") {
            setSelectedDates([
                { value: '6pm', label: '6 PM ' },
                { value: '7pm', label: '7 PM' },
                { value: '8pm', label: '8 PM' },
            ])


        }
        if (value == "night") {
            setSelectedDates([{ value: '12pm', label: '12 PM' },
            { value: '9pm', label: '9 PM ' },
            { value: '10pm', label: '10 PM' },
            { value: '11pm', label: '11 PM' },
            { value: '12am', label: '12 AM' },
            { value: '1am', label: '1 AM' },
            { value: '2am', label: '2 AM' },
            { value: '3am', label: '3 AM' },
            { value: '4am', label: '4 AM' },

            ])


        }

    }


    console.log(selectedDates);

    return (
        <div>

            <div className="container bookingPage">
                <div className="onePart">
                    <div>
                        {changeDiv ? <button className="ones">1</button> : <img className="ticks" src={image7} />}
                        <p className="serviceText">Service Info</p>
                    </div>
                    <div className="dottedLine"><img src={image4} /></div>
                    <div className="vertical"><img className="verticalLine" src={image9} /></div>
                    <div>{secondButton ? <button className={changeDiv ? "two" : "ones"}>2</button> : <img className="ticks" src={image7} />}

                        <p className="serviceText">Book Service</p></div>
                    <div className="vertical"><img className="verticalLine" src={image9} /></div>
                    <div className="dottedLine"><img src={image4} /></div>
                    <div>
                        <button className={button3 ? "two" : "ones"}>3</button>
                        <p className="serviceText">Booking confirmed</p></div>

                </div>
                {page ? <div>
                    <form onSubmit={handleSubmit} id="stepOne">
                        <div>
                            <div>
                                <p className="deliveryDate">Enter your Delivery Date </p>
                                <div className="calenderDiv"><img className="calender" src={image1} /><input min={minDate} value={date} type="date" id="datePicker" onChange={(e) => setDate(e.target.value)} placeholder="Enter Date" className="calenderInput" /></div>
                                {fieldDate ? <p className="fieldDate">{fieldDates}</p> : null}

                            </div>
                            <div>
                                <p className="deliveryDate">Select your Shift </p>
                                <div className="calenderDiv"><img className="calender" src={image1} /><select onChange={(e) => changeDate(e.target.value)} placeholder="Enter Your Shift" className="calenderInput" >
                                    <option value="morning">Morning</option>
                                    <option value="afternoon">Afternoon</option>
                                    <option value="evening">Evening</option>
                                    <option value="night">Night</option>
                                </select></div>
                                {/* {fieldDate ? <p className="fieldDate">{fieldDates}</p> : null} */}

                            </div>
                            <div className="deliveryCalender">
                                <p className="deliveryDate">Select your Delivery Time </p>
                                <select className="calenderDiv border-0">
                                    {selectedDates.map((option) => (
                                        <option className="calenderInput" key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>


                                {/* <div className="calenderDiv"><img className="calender" src={image1} /><input id="timePicker" type="time" onChange={(e) => setTime(e.target.value)} placeholder="Enter Time" className="calenderInput" /></div> */}
                                {fieldTimes ? <p className="fieldDate">{fieldTime}</p> : null}
                            </div>

                        </div>
                        <div>
                            <div>
                                <p className="deliveryDate">Enter your Number </p>
                                <div className="calenderDiv"> <input type="number" pattern="[0-9]*" onChange={(e) => setNumber(e.target.value)} placeholder="+21-000000000" className="calenderInput" /></div>
                                {fieldNumbers ? <p className="fieldDate">{fieldNumber}</p> : null}
                            </div>
                            {/* <span className="current">Use Current Location</span> */}
                            <div className="deliveryCalender">
                                <p className="deliveryDates">Your Address </p>
                                <div className="calenderDiv"><img className="calender" src={image2} /><input onChange={(e) => setAddress(e.target.value)} placeholder="Enter Your Address" className="calenderInput" /></div>
                                {fieldAddresss ? <p className="fieldDate">{fieldAddress}</p> : null}
                            </div>


                        </div>


                    </form>
                    <div>

                        <button type="submit" onClick={addButton} className="nextButton">Next</button>
                    </div>

                </div> : null}
                {page1 ? <div>
                    {!creditcard ?
                        <>
                            <div id="stepTwo">
                                <div>
                                    <div>
                                        <p className="deliveryDate">Service Quantity </p>
                                        <div className="incrementDiv"><img src={image5} />
                                            <div className="decrement">
                                                {paymentdon ? <p>{count}</p> : <>
                                                    <button onClick={() => {
                                                        if (count > 1) {
                                                            setCount(count - 1)
                                                        }
                                                    }} className="increment">-</button>
                                                    <p>{count}</p>
                                                    <button onClick={() => setCount(count + 1)} className="increment">+</button>
                                                </>}
                                            </div>

                                        </div>
                                        {fieldCounts ? <p className="fieldDate">{fieldCount}</p> : null}

                                    </div>

                                    <div className="deliveryCalender">
                                        <p className="deliveryDate">Select your Payment Method </p>

                                        {paymentdon ?
                                            <div>
                                                <div style={{ marginTop: "35px" }} class="right">Payment <span>(Done)</span></div>
                                            </div>
                                            : <>
                                                <div>
                                                    <div className="contains">
                                                        <div>
                                                            <div class="radio">
                                                                <input type="radio" checked value="Male" name='gender' id='male' />
                                                                <label for="male"></label>
                                                            </div>
                                                        </div>
                                                        <div class="right">Cash on Delivery</div>
                                                    </div>

                                                    <div className="contains">
                                                        <div >
                                                            <div class="radio">
                                                                <input onClick={(e) => setCreditcard(true)} type="radio" value="Female" name='gender' id='female' />
                                                                <label for="female"></label>
                                                            </div>
                                                        </div>
                                                        <div class="right">Credit Card </div>
                                                    </div>
                                                </div>
                                            </>}
                                    </div>

                                </div>
                                <div>
                                    <div>
                                        <p className="deliveryDate">Price details  </p>
                                        <div className="calenderDiv"> <input onChange={(e) => setCoupon(e.target.value)} placeholder="Enter Coupon Code" className="calenderInput text-center" /></div>
                                    </div>
                                    <div className="marginService">
                                        <p className="deliveryDate">Service Name  </p>
                                        <div className="calenderDiv"> <input value={categoryName} placeholder="Enter Service" className="calenderInput text-center" /></div>
                                        {fieldServiceNames ? <p className="fieldDate">{fieldDates}</p> : null}
                                    </div>

                                    <div className="deliveryCalender">
                                <div className="priceDiv">
                                    <p>Price : 50$</p>
                                    <p>Quantity : {count}</p>
                                    <p className="fw-bold">Total Amount : 100$</p>
                                </div>
                            </div> 
                                    <div style={{ marginTop: "15px" }}>
                                        <p>Price : ${(Location.state.category_price ? Location.state.category_price : Location.state.service_price ? Location.state.service_price : null ).replace(/\$/g, '')}</p>
                                        <p>Quantity : {count}</p>
                                        <p className="fw-bold">Total Amount :${JSON.parse((Location.state.category_price ? Location.state.category_price : Location.state.service_price ? Location.state.service_price : null ).replace(/\$/g, '')) * count}</p>
                                    </div>

                                </div>

                            </div>
                            <div className="addBack">
                                <button onClick={backbutton} className="nextButton">Back</button>
                                <button onClick={addButton1} className="nextButton">Next</button>
                            </div>
                        </> : <>
                            <div className="creditcard">
                                <h1>Credit Card</h1>
                                <div>
                                    <p className="deliveryDate">Card Number  </p>
                                    <div className="calenderDiv"> <input onChange={(e) => setCard_number(e.target.value)} placeholder="4242***********" className="calenderInput text-center" /></div>
                                </div>
                                <div>
                                    <p className="deliveryDate">Exp Month  </p>
                                    <div className="calenderDiv"> <input onChange={(e) => setExp_month(e.target.value)} placeholder="12" className="calenderInput text-center" /></div>
                                </div>
                                <div>
                                    <p className="deliveryDate">Exp Year  </p>
                                    <div className="calenderDiv"> <input onChange={(e) => setExp_year(e.target.value)} placeholder="2023" className="calenderInput text-center" /></div>
                                </div>
                                <div>
                                    <p className="deliveryDate">CVC  </p>
                                    <div className="calenderDiv"> <input onChange={(e) => setEvc(e.target.value)} placeholder="123" className="calenderInput text-center" /></div>
                                </div>
                                <div style={{ marginTop: "15px" }}>
                                    <p className="fw-bold">Total Amount :${JSON.parse((Location.state.category_price ? Location.state.category_price : Location.state.service_price ? Location.state.service_price : null ).replace(/\$/g, '')) * count}</p>
                                </div>

                                <button onClick={addstripe} className="nextButton">Submit</button>
                            </div>
                        </>}
                </div> : null}
                {page2 ? <div>
                    <div id="stepThree">
                        <div className="bookingConfirmed">
                            <div><img className="check" src={image6} /></div>
                            <p className="confirmBooking">Confirm Booking</p>
                            <p className="confirmBooking2">Are you sure you want to confirm
                                the booking</p>

                        </div>

                    </div>
                    <div>
                        <button onClick={backButton2} className="nextButton">Back</button>
                        <button onClick={addButton2} className="nextButton">Confirm Booking</button>
                    </div>
                    <div>
                        {cross ? <div><form onSubmit={submituser} className="box">
                            <img className="close" src={close} onClick={opens} />

                            <p className="access">Access your Account</p>
                            <p className="dontAccount">Don’t have an account? <span onClick={() => navigate('/signup')}>Signup</span></p>
                            <div className="container d-block m-auto">
                                <div className="emaildiv">
                                    <p>Email</p>
                                    <input onChange={(e) => setEmailAddress(e.target.value)} className="emailInput" />
                                </div>
                                <div className="emaildiv">
                                    <p>Password</p>
                                    <input type='password' onChange={(e) => setPassword(e.target.value)} className="emailInput" />

                                </div>
                                {check ? <p className="message">{message} *</p> : null}
                                <button className="loginButton">Log In</button>
                            </div>
                        </form> </div> : null}
                    </div>
                </div> : null}



            </div>
        </div>
    )
}


export default Booking;