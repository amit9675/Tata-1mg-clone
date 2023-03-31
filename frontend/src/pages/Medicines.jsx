import React from "react";
import { useEffect } from "react";

import Filter from "../components/Filter";

import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";

import MedicineCard from "../components/MedicineCard";
import { useState } from "react";
import axios from "axios";
import { Heading ,Text} from "@chakra-ui/react";


const Medicines = () => {
 
  const[medicine,setMedicine]=useState([])

  const getData=()=>{
    axios.get("http://localhost:8085/medicines").then((res)=>{
      setMedicine(res.data)
    }).catch(err=>{console.log(err)})
  }

  useEffect(()=>{
    getData()
  },[])
 console.log(medicine)

 //const navigate=useNavigate();
// onClick={()=>navigate("/``")}
 

  return (
    <div data-testid="watches" style={{ display: "flex" ,width:"80%",margin:"auto",backgroundColor:"white"}} >
      <Filter />
     
      <div 
      
      style={{
        border:"3px solid Teal",
        width: "100%",
        display: "grid",
        gap: "10px",
        gridTemplateColumns: "repeat(auto-fit, minmax(310px, max-content)",
        justifyContent: "center",
        
      }}
      >
        {
         medicine.length>0 &&  medicine?.map((watch) => {
            return (
              // <div key={watch.id} style={{ width: "310px" }}>
              //     {/* <Link 
              //       to={`/medicine/${watch.id}`}
              //       style={{ textDecoration: "none", color: "black" }}
              //     > */}
              //        <MedicineCard watch={watch} /> 
              //     {/* </Link> */}
              // </div>
              
              <div className="main_div"
        style={{
          display: "block",
          width: "80%",
          height: "400px",
          border: "2px solid black",
          borderRadius: "2px",
          boxShadow:'2xl',
          margin:"15"

        }}
      >
        <div 
          style={{
            display: "flex",
            height: "50%",
            padding: "20px 20px 0 20px",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img 
            alt="watch"
            src={watch.image}
            style={{
              backgroundSize: "contain",
              width: "100%",
              maxHeight: "100%",
            }}
          />
        </div>
        
        <div style={{ textAlign: "start" }} >
          <div  style={{ fontSize: "20px" }} > {watch.name}</div>
          <p>bottel of 60 capsules</p>
          <p>MRP:<span><s>{watch.price}</s></span> <span>{watch.discount}</span></p>

            <div style={{display:"flex"}}>

          <Text fontSize="xl">{watch.mainprice}</Text>
          <button style={{paddingLeft:"100px",color:"red"}} ><b>ADD</b></button>
            </div>

        </div>
      </div>
            )
          })}
      </div>

      {/* {medicine?.map((el)=><div>
      <img src={el.image} /></div>)} */}

    </div>
  );
};

export default Medicines;
