import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

//import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Stack,
  Button,
  Tab,
  Flex,
} from "@chakra-ui/react";
import Category from "./Navbar";

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};
 
const SinglePage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const handleCart = async(id)=>{
    console.log("In cart",data)
    // const data = await  axios.get(`https://combative-red-horse.cyclic.app/getdata/${id}`)
    // console.log("data",data)
    // const payload  ={
  
    // }
    await axios.post(`https://combative-red-horse.cyclic.app/cart/add_to_cart`,data,{
      headers:{
        "Authorization":localStorage.getItem("token")
      }
    })
  }
  console.log(2*(data.price))
  const  firstData=((data.price)/60)*10
  const secondData=((data.price)/60)*30
  const thirdData=((data.price)/60)*60
  const getData = (id) => {

    axios.get(`https://combative-red-horse.cyclic.app/getdata/${id}`)
  .then((res) => {
        setData(res.data[0]);

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(data);
  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <Container maxW={"10xl"} p="12" border="1px solid red" background="#F3F3F4">
    <Category/>
      <Box maxW={"5xl"} p="12"  background="#F3F3F4" marginLeft="200px">
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          color="#FFFFFF"
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", xl: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
            boxShadow="Base"
          >
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Box  width="50%" height="80%" >
              <Image
                //  border="1px solid red"
                width="150%"
                height="400px"
                borderRadius="lg"
                src={data.image}
                alt="some good alt text"
                objectFit="contain"
                marginTop="-200px"
              />
              </Box>
            </Link>
          </Box>
        </Box>
        {/* 2nd div */}
        <Box
          ml="-200px"
          textAlign="start"
          // border="2px solid red"
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          fontFamily="serif"
          fontSize="20px"
          // marginTop={{ base: "3", sm: "0" }}
          backgroundColor="#FCFCFC"
        >
          <BlogTags tags={["new"]} />
          <br />
          <Heading as="h1" size="lg">
            {/* <Link textDecoration="none" _hover={{ textDecoration: 'none' }}> */}
            {data.name}
            {/* </Link> */}
          </Heading>
          <br />
          <p style={{color:"red"}}>Medi hub Healthcare Solutions Private Limited</p>

          <Text fontSize='3xl'> Product details</Text>

          <ul><li>
           
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            {data.brand}
          </Text>
            </li></ul>
          
          

          
          <ul><li><Text>{data.subcat2}</Text>
            </li></ul>
          
            <ul><li><Text>Zero Side Effects</Text>
            </li></ul>
            <ul><li><Text>It is a vegan product and contains natural sweeteners</Text>
            </li></ul>
            <ul><li><Text>Free from gluten, milk, soy, nut, gelatin, preservatives and artificial flavour </Text>
            </li></ul>
          <Text>
            <s>{data.mainprice}</s> <span style={{color:"red"}}>{data.discount}</span>
          </Text>
          <Text fontSize="2xl">₹{data.price}</Text>
          {/* <Text>₹{secondData}</Text> */}

          {/* <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} /> */}
          
          <Text fontSize='xl'><u> Pack of 3</u></Text>
          <br />
        <Stack  width="600px" h="100px" gap="10px">
          <Flex columnGap="20px">
          <Box border="0.5px solid grey" borderRadius="10px" width="100px" h="70px" pl="10px">
          <Text fontSize='md'> 4 Gummies</Text>
            <Text fontSize='md'>₹{firstData}</Text>
          </Box>
          <Box border="0.5px solid grey" borderRadius="10px"width="100px" h="70px"  pl="10px">
          <Text fontSize='md'>15 Gummies</Text>
            <Text  fontSize='md'>₹{secondData}</Text>
          </Box>
          <Box border="0.5px solid grey" borderRadius="10px" width="100px" h="70px"  pl="10px">
          <Text fontSize='md'>30 Gummies</Text>
         <Text  fontSize='md'>₹{thirdData}</Text>
          </Box>
          </Flex>
        </Stack>

          <Stack direction="row" spacing={4}>
            <Button w="300px" colorScheme="orange" variant="solid" onClick={(id)=>handleCart(id)} >
              Add To Cart
            </Button>
          </Stack>
        </Box>
      </Box>
      </Box>
    </Container>
  );
};

export default SinglePage
