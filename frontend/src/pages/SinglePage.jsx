import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const SinglePage = ( ) => {

  const {id}  = useParams();
  const [data, setData]  = useState({});
  // const getData = ()=>{
  //   axios.get(`http://localhost:8080/medicines/${id}`).then((r)=>{
  //     setData(r.data);
  //   }).catch(()=>{

  //   })
  // }

  // console.log(data);
  // useEffect(()=>{
  //   getData()
  // },[])

  return (
    <div>
      <h2>Watch name</h2>
      <div>
        <img src={data.image} alt="Cover Pic" />
      </div>
      <div>
        <div><h2>{data.category}</h2></div>
      </div>
    </div>
  );
};

export default SinglePage;
