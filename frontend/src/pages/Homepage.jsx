
import Moveslider from "../components/Moveslider";
import Healthconslider from "../components/Healthconslider"

import React from 'react'
import { Link } from "react-router-dom";
import Brandslider from "../components/Brandslider";
import Productslider from  "../components/productslider";
import Antioxidentslider from "../components/Antioxidentslider";
import Footerpara from "../components/Footerpara";
import Footer from "../components/Footer";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Box,
  Image
} from '@chakra-ui/react'



const Homepage = () => {
  return (
    <Box w="100%" margin="auto" bgColor="#CBD5E0">
    <Box display="flex" flexDirection={{ base: 'column ', md: 'row',lg: 'row',xl: 'row', '2xl': 'row'}} >
        <Box margin="auto" w='95%' bgColor="white">
         <Moveslider/>
         <Text  paddingTop="15px" w="90%"  fontSize={{ base: 'xl ', md: 'xl',lg: '2xl',xl: '3xl', '2xl': '3xl'}}>Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</Text>
        </Box>
    </Box>
    <Link><Image w="100%" margin="auto" paddingBottom="40px" paddingTop="40px" src="https://onemg.gumlet.io/marketing/29087450-0f25-4856-96fc-62f4ea81bbd3.png" /></Link>
     <Box margin="auto" w='95%'  >
      <Box textAlign="left"  paddingTop="15px" paddingBottom="15px" >
      <Text  w="90%" as="b"   fontSize={{ base: 'xl ', md: 'xl',lg: '2xl',xl: '2xl', '2xl': '2xl'}}>Shop By Health Concerns</Text>
      </Box>
     <Healthconslider/>
     </Box>

     <Box margin="auto" w='95%' >
     <Box textAlign="left"  paddingTop="25px" paddingBottom="15px" >
      <Text  w="90%" as="b"   fontSize={{ base: 'xl ', md: 'xl',lg: '2xl',xl: '2xl', '2xl': '2xl'}}>Featured brands</Text>
      </Box>
     <Brandslider/>
     </Box>

     <Box margin="auto" w='95%'  >
     <Box textAlign="left"  paddingTop="25px" paddingBottom="15px" >
      <Text  w="90%" as="b"   fontSize={{ base: 'xl ', md: 'xl',lg: '2xl',xl: '2xl', '2xl': '2xl'}}>Popular Combo Deals</Text>
      </Box>
     <Productslider/>
     </Box>

     <Box margin="auto" w='95%'  >
     <Box textAlign="left"  paddingTop="25px" paddingBottom="15px" >
      <Text  w="90%" as="b"   fontSize={{ base: 'xl ', md: 'xl',lg: '2xl',xl: '2xl', '2xl': '2xl'}}>Antioxidants | supplement of the week</Text>
      </Box>
     <Antioxidentslider/>
     </Box>
    
    <Box textAlign="left" margin="auto" w='95%'  paddingTop="30px"  >
    <Footerpara/>
    <Footer/>
     </Box>
    </Box>
  )
}

export default Homepage