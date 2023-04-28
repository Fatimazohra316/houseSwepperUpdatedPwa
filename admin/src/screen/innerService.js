import React, { useState } from "react";
import handImage from "../images/hand.png";
import add1 from "../images/smallAdd.png"


function InnerService() {
    const [residentialCleaning, setResidentialCleaning] = useState(true);
    const [cleaningButton, setCleaningButton] = useState(true)
    const [base64code, setBase64Code] = useState('');
    const [base64code1, setBase64Code1] = useState('');
    const [base64code2, setBase64Code2] = useState('');
    const [base64code3, setBase64Code3] = useState('');
    const hiddenFileInput = React.useRef(null);
    const hiddenFileInput1 = React.useRef(null);
    const hiddenFileInput2 = React.useRef(null);
    const hiddenFileInput3 = React.useRef(null);
    const [commercialName, setCommercialName] = useState('');
    const [commercialPrice, setCommercialPrice] = useState('');
    const [commercialRating, setCommercialRating] = useState('');
    const [commercialDescription, setCommercialDescription] = useState('');
    const [category, setCategory] = useState(true);
    const [serviceName,setServiceeName] = useState('');
    const [serviceRating,setServiceRating] = useState('');
    const [servicePrice,setServicePrice] = useState();
    const [serviceDescription,setServiceDescription] = useState('');
    const [categoryName,setCategoryName] = useState('');
    const [categoryPrice,setCategoryPrice] = useState();
    const [categoryRating,setCategoryRating] = useState('');
    const [categoryDescription,setCategoryDescription] = useState('');


    const url = "https://cleaningapp.8tkt.com/api/createcommercial";
    const url1 = "https://cleaningapp.8tkt.com/api/createservice";
    const url2 = "https://cleaningapp.8tkt.com/api/createcategory";

    
    const onChange = (event) => {
        const file = event.target.files[0];
    
        const reader = new FileReader();
        reader.readAsDataURL(file);
    
        reader.onload = () => {
          setBase64Code(reader.result);
          
        };
      };
    const onChange1 = (event) => {
        const file = event.target.files[0];
    
        const reader = new FileReader();
        reader.readAsDataURL(file);
    
        reader.onload = () => {
          setBase64Code1(reader.result);
          
        };
      };
    const onChange2 = (event) => {
        const file = event.target.files[0];
    
        const reader = new FileReader();
        reader.readAsDataURL(file);
    
        reader.onload = () => {
          setBase64Code2(reader.result);
         
          
        };
      };
      const onChange3 = (event) => {
       
        const file = event.target.files[0];
    
        const reader = new FileReader();
        reader.readAsDataURL(file);
    
        reader.onload = () => {
          setBase64Code3(reader.result);
          console.log(reader.result);
        };
      };
    const changeResidential = () => {
        setResidentialCleaning(false)
        setCleaningButton(false)
    }
    const changeCommercial = () => {
        setResidentialCleaning(true)
        setCleaningButton(true)
    }
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleClick1 = event => {
        hiddenFileInput1.current.click();
    };
    const handleClick2 = event => {
        hiddenFileInput2.current.click();
    };
    const handleClick3 = event => {
        hiddenFileInput3.current.click();
    };
    const saveData = () => {
        const data = new FormData;
        data.append('service_name', commercialName);
        data.append('service_image', base64code); 
        data.append('service_price', commercialPrice);
        data.append('service_rating', commercialRating);
        data.append('service_description', commercialDescription);
        
        fetch(url, {
            method: "POST",
            body: data,

        }).then((response) => response.json()).then((data) => {
            // console.log(data);
            
        })
        if (!commercialName || !commercialPrice || !base64code || !commercialDescription || !commercialRating) {
            alert('Kindly Fill all the Fields')
        }
        else{
            alert("Service add successfully")
        }


    }

    const addServices = () => {
        const data = new FormData;
        data.append('service_name', serviceName);
        data.append('service_image',base64code1);
        data.append('service_price', servicePrice);
        data.append('service_rating', serviceRating);
        data.append('service_description', serviceDescription);
      
        fetch(url1, {
            method: "POST",
            body: data,

        }).then((response) => response.json()).then((data) => {
            // console.log(data);
           
        })
        if (!serviceName || !servicePrice || !base64code1 || !serviceDescription || !serviceRating) {
            alert('Kindly Fill all the Fields')
        }
        else{
            alert("Service add successfully")
        }
    }
    const addCategory = () => {
        const data = new FormData;
        data.append('category_name', categoryName);
        data.append('category_icon', base64code2);
        data.append('category_image',base64code3);
        data.append('category_price', categoryPrice);
        data.append('category_rating', categoryRating);
        data.append('category_description', categoryDescription);

        fetch(url2, {
            method: "POST",
            body: data,

        }).then((response) => response.json()).then((data) => {
            // console.log(data);
           
        })
        if (!categoryName || !categoryPrice || !base64code2 || !categoryDescription || !categoryRating || !base64code3) {
            alert('Kindly Fill all the Fields')
        }
        else{
            alert("Category add successfully");
           
        }
    }

    // console.log(base64code1);
    return (
        <div className="innerService">
            <h1 className="serviceHeading">Services</h1>
            <h3 className="cleaningServices"><img src={handImage} /> <span>Add New Services</span></h3>
            <div className="cleaningsButton">
                <button onClick={changeCommercial} className={cleaningButton ? "residentialButton" : "commercialButton"}>Residential Cleaning</button>
                <button onClick={changeResidential} className={cleaningButton ? "commercialButton" : "residentialButton"}>Commercial Cleaning</button>
            </div>
            {residentialCleaning ?
                <div>
                    <div className="cleaningsButton">
                    <button onClick={()=>setCategory(true)} className={category ? "residentialButton" : "commercialButton"} >Category</button>
                    <button onClick={()=>setCategory(false)} className={category ? "commercialButton" : "residentialButton"} >Service</button>
                    </div>
                    {category ? 
                    <div>
                        <div className="addService">
                            <div>
                                <div>
                                    <p className="deliveryDate">Enter Category Name </p>
                                    <div className="calenderDiv"><input onChange={(e)=>setCategoryName(e.target.value)} placeholder="Category Name" className="calenderInput" /></div>


                                </div>
                                <div className="serviceAdd">
                                    <div onClick={handleClick2} className="addImage">
                                        
                                        <img className={base64code2 ? "base" : null} src={base64code2 ? base64code2 : add1} />



                                    </div>
                                    <p>Add Service Icon</p>
                                    <input className="hiddenInput" ref={hiddenFileInput2} type="file" onChange={onChange2} />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p className="deliveryDate">Enter Category Price </p>
                                    <div className="calenderDiv"><input onChange={(e)=>setCategoryPrice(e.target.value)} placeholder="Category Price $" type="number" className="calenderInput" /></div>


                                </div>
                                <div className="serviceAdd">
                                    <div onClick={handleClick3} className="addImage">
                                    <img className={base64code3 ? "base" : null} src={base64code3 ? base64code3 : add1} />

                                    </div>
                                    <p>Add Service Image</p>
                                    <input className="hiddenInput" ref={hiddenFileInput3} type="file" onChange={onChange3} />
                                    
                                </div>

                            </div>
                            <div>
                                <div>
                                    <p className="deliveryDate">Enter Category Rating</p>
                                    <div className="calenderDiv"><input onChange={(e)=>setCategoryRating(e.target.value)}  placeholder="Category Rating"  className="calenderInput" /></div>


                                </div>
                               
                                   

                            </div>

                        </div>
                        <div className="serviceTextArea">
                            <p className="deliveryDate">Enter Category Description</p>
                            <div className="calendersDiv">

                                <textarea onChange={(e)=>setCategoryDescription(e.target.value)} placeholder="Category Description" rows="8" cols="150" />

                            </div>

                        </div>
                        <button onClick={addCategory}  className="btn save">Save</button>
                    </div>
                        :
                        <div>
                            <div className="addService">
                                <div>
                                    <div>
                                        <p className="deliveryDate">Enter Service Name </p>
                                        <div className="calenderDiv"><input onChange={(e)=>setServiceeName(e.target.value)} placeholder="Service Name" className="calenderInput" /></div>

 
                                    </div>
                                    <div>
                                        <p className="deliveryDate">Enter Service Rating </p>
                                        <div className="calenderDiv"><input onChange={(e)=>setServiceRating(e.target.value)} placeholder="Service Rating" className="calenderInput" /></div>


                                    </div>
                                   
                                </div>
                                <div>
                                    <div>
                                        <p className="deliveryDate">Enter Service Price </p>
                                        <div className="calenderDiv"><input onChange={(e)=>setServicePrice(e.target.value)} placeholder="Service Price $" className="calenderInput" /></div>


                                    </div>
                                    <div className="serviceAdd">
                                        <div onClick={handleClick1} className="addImage">
                                        <img className={base64code1 ? "base" : null} src={base64code1 ? base64code1 : add1} />

                                        </div>
                                        <p>Add Service Image</p>
                                        <input className="hiddenInput" ref={hiddenFileInput1} type="file" onChange={onChange1} />
                                    </div>

                                </div>

                            </div>
                            <div className="serviceTextArea">
                                <p className="deliveryDate">Enter Service Description</p>
                                <div className="calendersDiv">

                                    <textarea onChange={(e)=>setServiceDescription(e.target.value)} placeholder="Service Description" rows="8" cols="150" />

                                </div>

                            </div>
                            <button onClick={addServices} className="btn save">Save</button>
                        </div>}

                </div> :
                <div>
                    <div className="addService">
                        <div>
                            <div>
                                <p className="deliveryDate">Enter Service Name </p>
                                <div className="calenderDiv"><input onChange={(e) => setCommercialName(e.target.value)} placeholder="Service Name" className="calenderInput" /></div>


                             </div>
                            <div>
                                <p className="deliveryDate">Enter Rating </p>
                                <div className="calenderDiv"><input onChange={(e) => setCommercialRating(e.target.value)} placeholder="Rating" className="calenderInput" /></div>


                            </div>

                        </div>
                        <div>
                            <div>
                                <p className="deliveryDate">Enter Service Price </p>
                                <div className="calenderDiv"><input placeholder="Service Price" type="number" onChange={(e) => setCommercialPrice(e.target.value)} className="calenderInput" /></div>


                            </div>
                            <div className="serviceAdd">
                                <div onClick={handleClick} className="addImage">
                                    <img className={base64code ? "base" : null} src={base64code ? base64code : add1} />

                                </div>
                                <p>Add Service Image</p>
                                <input className="hiddenInput" ref={hiddenFileInput} type="file" onChange={onChange} />
                                

                            </div>

                        </div>

                    </div>
                    <div className="serviceTextArea">
                        <p className="deliveryDate">Enter Service Description</p>
                        <div className="calendersDiv">

                            <textarea onChange={(e) => setCommercialDescription(e.target.value)} placeholder="Service Description" rows="8" cols="150" />

                        </div>

                    </div>
                    <button onClick={saveData} className="btn save">Save</button>
                </div>
            }
        </div>
    )
}


export default InnerService;