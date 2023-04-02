
import Slider from "react-slick";
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
import { Link } from "react-router-dom";


const Productslider = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
    settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
  return (
    <Box margin="auto" paddingTop="30px" bgColor="white" >
      <Slider {...settings}>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image h="200px"  w="200px" src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/38b86c6a33f744afac80ed36d4bb87ba.jpg" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'   >Tata 1mg Diabetics Care</Text>
          <Text w="100%" textAlign="center" fontSize='xs'   >Combo pack for ...</Text>
          <Text w="100%" textAlign="center" fontSize='xs' as="b">combo pack of 3 Packs</Text>
          <br />
          <br/>
          <Text w="100%" textAlign="center" fontSize='sm' as="b">MRP ₹582 </Text>
          <br/>
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image  h="200px" w="200px" src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/c2sw0gi2dw4cwdf1ecjp.jpg" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'   >Accu-Check Combo Pack</Text>
          <Text w="100%" textAlign="center" fontSize='xs'   >of Active 50 Test Stri...</Text>
          <Text w="100%" textAlign="center" fontSize='xs' as="b">combo pack of 3 units</Text>
          <br />
          <br/>
          <Text w="100%" textAlign="center" fontSize='sm' as="b">MRP ₹1195 </Text>
          <br/>
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image w="200px"  h="200px" src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/537fd698-25dd-43d5-b5f7-02a997bcd33a.jpeg" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'   >Combo Pack of Tata</Text>
          <Text w="100%" textAlign="center" fontSize='xs'   >1mg Multivitamin...</Text>
          <Text w="100%" textAlign="center" fontSize='xs' as="b">combo pack of 2 bottles</Text>
          <br />
          <br/>
          <Text w="100%" textAlign="center" fontSize='sm' as="b">MRP ₹795 </Text>
          <br/>
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image w="200px" h="200px"src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qir6i2zlhzeddxa4mqt0.jpg" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'   >Immunity Care Combo</Text>
          <Text w="100%" textAlign="center" fontSize='xs'   >of 1mg Panch Tulsi...</Text>
          <Text w="100%" textAlign="center" fontSize='xs' as="b">combo pack of 2 packs</Text>
          <br />
          <br/>
          <Text w="100%" textAlign="center" fontSize='sm' as="b">MRP ₹239 </Text>
          <br/>
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image w="200px" h="200px"src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cr9a2p0evnuzwvw5ksp1.jpg" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'   >Acne Care Combo of</Text>
          <Text w="100%" textAlign="center" fontSize='xs'   >Cetaphil Oily Skin</Text>
          <Text w="100%" textAlign="center" fontSize='xs' as="b">combo pack of 2 packs</Text>
          <br />
          <br/>
          <Text w="100%" textAlign="center" fontSize='sm' as="b">MRP ₹681 </Text>
          <br/>
        </Box>

        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image w="200px" h="200px"src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/if0qou7t1ptcaaowcigp.jpg" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'   >Accu-Chek Active</Text>
          <Text w="100%" textAlign="center" fontSize='xs'   >Combo of Glucometer</Text>
          <Text w="100%" textAlign="center" fontSize='xs' as="b">combo pack of 2 packs</Text>
          <br />
          <br/>
          <Text w="100%" textAlign="center" fontSize='sm' as="b">MRP ₹1856</Text>
          <br/>
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image w="200px" h="200px"src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/lvtn5rrf1guolsh7lrfx.jpg" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'   >One Touch Select Plus</Text>
          <Text w="100%" textAlign="center" fontSize='xs'   >Simple Glucometer</Text>
          <Text w="100%" textAlign="center" fontSize='xs' as="b">combo pack of 4 packs</Text>
          <br />
          <br/>
          <Text w="100%" textAlign="center" fontSize='sm' as="b">MRP ₹2247 </Text>
          <br/>
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image w="200px" h="200px"src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/oexechydeypou9aw45xc.jpg" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'   >Pain Releif Combo of Dr</Text>
          <Text w="100%" textAlign="center" fontSize='xs'   >Ortho Oil 120ml and ...</Text>
          <Text w="100%" textAlign="center" fontSize='xs' as="b">combo pack of 2 bottles</Text>
          <br />
          <br/>
          <Text w="100%" textAlign="center" fontSize='sm' as="b">MRP ₹547 </Text>
          <br/>
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image w="200px" h="200px"src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qdkxnbhl24dgn02m7fc4.jpg" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'   >Anti-oxidants Combo of</Text>
          <Text w="100%" textAlign="center" fontSize='xs'   >Organic India Lemon...</Text>
          <Text w="100%" textAlign="center" fontSize='xs' as="b">combo pack of 2 packs</Text>
          <br />
          <br/>
          <Text w="100%" textAlign="center" fontSize='sm' as="b">MRP ₹795 </Text>
          <br/>
        </Box>
      </Slider>
    </Box>
  )
}

export default Productslider