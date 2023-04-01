import React from "react";
import { useEffect } from "react";

import Filter from "../components/Filter";
import { StarIcon } from '@chakra-ui/icons'

import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";


import { useState } from "react";
import axios from "axios";
import { Box, Heading, Popover, PopoverTrigger, SimpleGrid, Text } from "@chakra-ui/react";

const Medicines = () => {
  const [medicine, setMedicine] = useState([]);

  const getData = (params) => {
    axios
      .get("https://shy-pear-raven-cap.cyclic.app/getdata",params)
      .then((res) => {
        setMedicine(res.data);
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
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
    getData(getMedicineParams);
  }, [location.search, medicine.length, searchParams]);

  const navigate = useNavigate();
  const handleclick = (_id) => {
    navigate(`/getdata/${_id}`);
  };

  return (
    <div
     
      style={{
        border:"3px solid red",
        display: "flex",
        width: "100%",
        
        margin: "auto",
        backgroundColor: "#F6F6F7",
      }}
    >
      <div>
      <Filter />
      </div>

      <SimpleGrid
        columns={[1, 2, 2, 4]} gap={5}
        style={{
          width: "80%",
          margin: "auto",
          // display: "grid",
          gap: "10px",
          // gridTemplateColumns: "repeat(auto-fit, minmax(400px, min-content)",
          justifyContent: "center",
          border:"3px solid teal",
          
        }}
      >
        {medicine.length > 0 &&
          medicine?.map((watch) => {
            return (
              <Popover> 
                <PopoverTrigger>
              <Box
              key={watch._id}
                className="main_div"
                boxShadow="md"
                onClick={() => handleclick(watch._id)}
                style={{
                  display: "block",
                  width: "90%",
                  height: "400px",
                  //  border: "2px solid black",
                  borderRadius: "2px",
                  marginTop: "50px",
                  padding: "10px",
                  backgroundColor:"#FCFCFC",
                  boxShadow:"xl"
                }}
              >
                <Box
                  style={{
                    width:"70%",
                    alignItems:"center",
                    justifyContent:"center",
                    display: "flex",
                    height: "60%",
                    padding: "20px 20px 0 20px",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundColor:"#FCFCFC",
                    border:"1px solid red"
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
                </Box>
                <Box style={{ textAlign: "start" }}>
                  <Heading  as='h6' size='sm'> {watch.name}</Heading>
                  <br />
                  <Text fontSize='xs'>bottel of 60 capsules</Text >
                  <p>{watch.category}</p>
                  
                  <Text fontSize='sm'>
                    MRP:
                    <span>
                      <s>{watch.mainprice}</s>
                    </span>{" "}
                    <span style={{ color: "red" }}>{watch.discount}</span>
                  </Text >

                  <div style={{ display: "flex" }}>
                    <Text fontSize="xl">Rs {watch.price}</Text>
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
