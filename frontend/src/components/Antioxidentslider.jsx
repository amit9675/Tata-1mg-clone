
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


const Antioxidentslider = () => {
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
         <Link> <Image h="200px"  w="200px" src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/c5ae6c9d8a6d44fa829eb1edebf193b2.jpg" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'   >1mg Super Antioxidant</Text>
          <Text w="100%" textAlign="center" fontSize='xs'   >Multiminerals with ...</Text>
          <Text w="100%" textAlign="center" fontSize='xs' as="b">box of 30 capsules</Text>
          <br />
          <br/>
          <Text w="100%" textAlign="center" fontSize='sm' as="b">MRP ₹173 </Text>
          <br/>
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image  h="200px" w="200px" src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/osfxwyu6wakrnflybdne.png" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'   >Chicnutrix Super C with</Text>
          <Text w="100%" textAlign="center" fontSize='xs'   >Vitamic C,Amala Extra ....</Text>
          <Text w="100%" textAlign="center" fontSize='xs' as="b">bottle of 20 Effervescent...</Text>
          <br />
          <br/>
          <Text w="100%" textAlign="center" fontSize='sm' as="b">MRP ₹279</Text>
          <br/>
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image w="200px"  h="200px" src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/hnhebh4vnjbhdtko5vfe.jpg" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'   >Dr.Morepen Iron & Zinc</Text>
          <Text w="100%" textAlign="center" fontSize='xs'   >with Vitamin C & B12</Text>
          <Text w="100%" textAlign="center" fontSize='xs' as="b">bottle of 60 tablets</Text>
          <br />
          <br/>
          <Text w="100%" textAlign="center" fontSize='sm' as="b">MRP ₹389 </Text>
          <br/>
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image w="200px" h="200px"src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/iyfn5hupleaimrrggwla.jpg" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'   >1mg turmeric curcummin</Text>
          <Text w="100%" textAlign="center" fontSize='xs'   >95% with piperine...</Text>
          <Text w="100%" textAlign="center" fontSize='xs' as="b">bottle of 30 tablets</Text>
          <br />
          <br/>
          <Text w="100%" textAlign="center" fontSize='sm' as="b">MRP ₹265 </Text>
          <br/>
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image w="200px" h="200px"src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/lifu3zxsdmwkibq716so.png" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'   >Chicnutrix Glow</Text>
          <Text w="100%" textAlign="center" fontSize='xs'   >Glutathinone and vita...</Text>
          <Text w="100%" textAlign="center" fontSize='xs' as="b">bottle of 20 Effervescent</Text>
          <br />
          <br/>
          <Text w="100%" textAlign="center" fontSize='sm' as="b">MRP ₹1149 </Text>
          <br/>
        </Box>

        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image w="200px" h="200px"src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/e1quecehqfwixqbgoffq.jpg" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'   >Organic India Turmeric</Text>
          <Text w="100%" textAlign="center" fontSize='xs'   >Formula Veg Capsule</Text>
          <Text w="100%" textAlign="center" fontSize='xs' as="b">bottle of 60 vegicaps</Text>
          <br />
          <br/>
          <Text w="100%" textAlign="center" fontSize='sm' as="b">MRP ₹282</Text>
          <br/>
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image w="200px" h="200px"src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/wesmmmzi3zpedmio94ay.jpg" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'   >Sunova Organic</Text>
          <Text w="100%" textAlign="center" fontSize='xs'   >Spirulina Capsule</Text>
          <Text w="100%" textAlign="center" fontSize='xs' as="b">bottle of 60 capsules</Text>
          <br />
          <br/>
          <Text w="100%" textAlign="center" fontSize='sm' as="b">MRP ₹205 </Text>
          <br/>
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image w="200px" h="200px"src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/pyqirnkp3cli4d0paccs.jpg" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'   >Zingavita Mighty</Text>
          <Text w="100%" textAlign="center" fontSize='xs'   >Vitamins Gummies fo...</Text>
          <Text w="100%" textAlign="center" fontSize='xs' as="b">bottle of 30 gummies</Text>
          <br />
          <br/>
          <Text w="100%" textAlign="center" fontSize='sm' as="b">MRP ₹249 </Text>
          <br/>
        </Box>
        <Box justifyContent="center" w="100%" h="150px" textAlign="center"   >
         <Link> <Image w="200px" h="200px"src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/e3e862f72b4f48d79a9845bf2f7947d3.jpg" margin="auto" /></Link> 
          <br />
          <Text w="100%" textAlign="center" fontSize='xs'   >Carbaminde Forte</Text>
          <Text w="100%" textAlign="center" fontSize='xs'   >Vitamin C 1000mg+...</Text>
          <Text w="100%" textAlign="center" fontSize='xs' as="b">bottle of 120 tablets</Text>
          <br />
          <br/>
          <Text w="100%" textAlign="center" fontSize='sm' as="b">MRP ₹499</Text>
          <br/>
        </Box>
      </Slider>
    </Box>
  )
}

export default Antioxidentslider