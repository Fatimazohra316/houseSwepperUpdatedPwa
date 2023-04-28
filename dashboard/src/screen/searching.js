import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import image3 from "../images/rating.png";
import image4 from "../images/rating4.PNG";
import image5 from "../images/rating3.PNG";
import image6 from "../images/rating2.PNG";
import image7 from "../images/rating1.PNG";

function Searching(props) {
    let {searchInput} = props
    
    const [serviceArr, setServiceArr] = useState([]);
    const [filterList, setFilterList] = useState([])
    const [filterData, setFilterData] = useState('')
    const [test, setTest]=useState("");
    const url = "https://cleaningapp.8tkt.com/api/services";
    const navigate = useNavigate();
    const [filterArr, setFilterArr] = useState([])

    const location = useLocation()
    let filterValue;
    let first = false;
    // filterValue = location.state;
    // console.log(filterValue);

    const getData = () => {
        fetch(url, {
            method: "POST"
        }).then((response) => response.json()).then((data) => {
            setServiceArr(data.data)
            setFilterList(data.data)
        })
    }

    console.log(searchInput);
    const searchItem = (val) => {
        // alert("hllo")
        const filteredData = serviceArr.filter((item, index) => {
            if (item.category_name.toLowerCase().includes(val.toLowerCase())) {
                return item
            }
        })
       
        setFilterList([...filteredData]);
       
        console.log([...filteredData])
    }
    useEffect(()=>{
        if(searchInput){
            // alert(searchInput)
            
            searchItem(searchInput)

        }
        else{
            setFilterList([...serviceArr])
        }
        
       
    
    },[searchInput])
   

  
    useEffect(() => {
        getData();
    },[])

    
//    useEffect(()=>{},[searchInput])

    const moveData = (data) => {
        navigate("/Item", {
            state: data

        })

    }


    return (
        <div className="container">
            {/* <div><img className="left" onClick={() => navigate("/")} src={image5} /></div> */}
           
               
            <div className="searchingDiv">

                {filterList.map((item, index) => {
                    return (
                        <div key={index} onClick={() => moveData(item)}>
                            <div className="searchingService" style={{
                                backgroundImage: `url(${item.category_image})`,
                                backgroundSize: "cover",
                            }}>
                                <button className="categoryButton">{item.category_name}</button>
                                <button className="categorybutton">{item.category_price}</button>

                            </div>
                            <div className="washroomDiv">
                                <div className="ratingDiv"><img className="starrating" src={item.category_rating  == 5 ? image3 : item.category_rating  == 4 ? image4 : item.category_rating  == 3 ? image5 : item.category_rating  == 2 ? image6 : item.category_rating  == 1 ? image7 : null    } /> <span className="rating">{item.category_rating}</span></div>
                                <p>{item.category_name}</p>
                            </div>
                        </div>

                    )
                })}
            </div>


        </div>
    )
}


export default Searching;