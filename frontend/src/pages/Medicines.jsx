import React from "react";
import { useEffect } from "react";

import Filter from "../components/Filter";
import { StarIcon } from '@chakra-ui/icons'
import style from "./Medicine.module.css"

import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";


import { useState } from "react";
import axios from "axios";
import { Box, Heading, Popover, PopoverTrigger, SimpleGrid, Text } from "@chakra-ui/react";
import Category from "./Navbar";

const Medicines = () => {
  <Category/>
  const [medicine, setMedicine] = useState([]);
  const[loading,setLoading]=useState(false)


  const getData = (params) => {
    axios
      .get("https://combative-red-horse.cyclic.app/getdata",params)
      .then((res) => {
        setLoading(true)
        setMedicine(res.data);

        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      });
  };

  const [searchParams] = useSearchParams();
  const location = useLocation();
  

  useEffect(() => {
    let getMedicineParams;
    if (location.search || medicine.length === 0) {
      getMedicineParams = {
        params: {
          category: searchParams.getAll("category"),
          price:searchParams.get("price")
        },
      };
    }
    setLoading(false)
    getData(getMedicineParams);
  }, [location.search, medicine.length, searchParams]);

  const navigate = useNavigate();

  const handleclick = (_id) => {
    navigate(`/getdata/${_id}`);
  };
  if(!loading){
    return <div className={style.ldsCircle} >
      <div>

      </div>
    </div>
  }

  return (

    <div
     
      style={{
        
        display: "flex",
        width: "100%",
        
        margin: "auto",
        backgroundColor: "#F0F0F2",
      }}
    >
      <div>
      <Filter />
      </div>
      
      <SimpleGrid
        columns={[1, 2, 2, 4]} gap={10}
        style={{
          width: "80%",
          margin: "auto",
          // display: "grid",
          gap: "20px",
          // gridTemplateColumns: "repeat(auto-fit, minmax(400px, min-content)",
          justifyContent: "center",
          // border:"3px solid teal",
          
        }}
      >
        {medicine.length > 0 &&
          medicine?.map((watch) => {
            return (
              <Popover> 
                <PopoverTrigger>
              <Box
              key={watch._id}
                className={style.main_div}
                boxShadow="md"
                onClick={() => handleclick(watch._id)}
                style={{
                  display: "inline-block",
                  width: "90%",
                  height: "350px",
                  //  border: "10px solid black",
                  borderRadius: "2px",
                  marginTop: "50px",
                  padding: "20px",
                  backgroundColor:"#FCFCFC",
                  boxShadow:"xl",
                  margin:"auto",
                  
              
                }}
              >
                <Box
                  style={{
                    width:"70%",
                    alignItems:"center",
                    justifyContent:"center",
                    display: "flex",
                    height: "60%",
                    
                    
                    backgroundColor:"#FCFCFC",
                    // border:"1px solid red",
                    margin:"auto"
                  }}
                >
                  <img
                    alt="watch"
                    src={watch.image}
                    style={{
                      backgroundSize: "contain",
                      width: "100%",
                      maxHeight: "110%",
                    }}
                  />
                </Box >
                <Box style={{ textAlign: "start",height:"150px",display:"block" } }>
                 
                 <Box style={{width:"max-content" }} >

                  <Heading  as='h6' size='sm' > {(watch.name).substring(0,28)}...</Heading>
                 </Box>
                 
                  
                  <Text fontSize='xs'>bottle of 60 capsules</Text >
                  <Text fontSize='md'>{watch.category}</Text>
                  
                  <Text fontSize='md'>
                    
                    <span>
                      <s>{watch.mainprice}</s>
                    </span>{"    "}
                    <span style={{ color: "green",fontWeight:"200px"}}>{watch.discount}</span>
                  </Text >

                  <div style={{ display: "flex" }}>
                    <Text fontSize="lg">₹ {watch.price}</Text>
                    <button style={{ paddingLeft: "100px", color: "red" }}>
                      <b>ADD</b>
                    </button>
                  </div>
                </Box>
              </Box>
              </PopoverTrigger>
              </Popover>
            );
          })}
      </SimpleGrid>

      
    </div>
  );
};

export default Medicines;
