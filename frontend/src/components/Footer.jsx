import React from 'react'
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

const Footer = () => {
    return (
        <Box  width="100%" margin="auto" textAlign="center" bgColor="#CBD5E0"  >
            <Box width="100%" margin="auto" textAlign="center" bgColor="white" >
                <hr />
                <hr />
                <Box paddingTop="20px" margin="auto"  >
                    <Text fontSize='xl' as="b" >INDIA’S LARGEST HEALTHCARE PLATFORM</Text>
                    <Box display="flex" margin="auto" w="90%" paddingTop="40px" paddingBottom="40px" >

                        <Box w="30%" textAlign="center" >
                            <Text fontSize='2xl' as="b">260m+</Text>
                            <Text fontSize='lg' >Visitors</Text>
                        </Box>

                        <Box w="30%" textAlign="center" >
                            <Text fontSize='2xl' as="b">31m+</Text>
                            <Text fontSize='lg' >Orders Delivered</Text>
                        </Box>

                        <Box w="30%" textAlign="center" >
                            <Text fontSize='2xl' as="b">1800+</Text>
                            <Text fontSize='lg' >Cities</Text>
                        </Box>

                    </Box>
                </Box>
                <hr />
                <hr />
            </Box>

            <Box w="90%" margin="auto" display="flex" flexDirection='flex' paddingTop="30px" bgColor="#CBD5E0" >

                <Box w="50%" display="flex" >

                    <Box w="50%" textAlign="left" >
                        <Text fontSize='sm' as="b"  >Know Us</Text>
                        <br />
                        <Text fontSize='xs'>About Us</Text>
                        <Text fontSize='xs'>Contact Us</Text>
                        <Text fontSize='xs'>Careers</Text>
                        <Text fontSize='xs'>Business Partnership</Text>
                        <Text fontSize='xs'>Become a Health Partner</Text>
                        <Text fontSize='xs'>Corporate Governance</Text>
                        <br />
                    </Box>

                    <Box textAlign="left" >
                        <Text fontSize='sm' as="b"  >Our Policies</Text>
                        <br />
                        <Text fontSize='xs'>Privacy Policy</Text>
                        <Text fontSize='xs'>Terms and Conditions</Text>
                        <Text fontSize='xs'>Editorial Policy</Text>
                        <Text fontSize='xs'>Return Policy</Text>
                        <Text fontSize='xs'>Grievance Redressal Policy</Text>
                        <Text fontSize='xs'>Fake Jobs and Fraud Disclaimer</Text>
                        <br />
                    </Box>

                </Box>

                <Box w="50%" display="flex"  >

                    <Box w="50%" textAlign="left" >
                        <Text fontSize='sm' as="b"  >Our Services</Text>
                        <br />
                        <Text fontSize='xs'>Order Medicines</Text>
                        <Text fontSize='xs'>Book Lab Tests</Text>
                        <Text fontSize='xs'>Consult a Doctor</Text>
                        <Text fontSize='xs'>Ayurveda Articles</Text>
                        <Text fontSize='xs'>Hindi Articles</Text>
                        <Text fontSize='xs'>Care Plan</Text>
                        <br />
                    </Box>

                    <Box w="50%" textAlign="left" >
                        <Text fontSize='sm' as="b"  >Connect</Text>
                        <br />
                        <Text fontSize='xs'>Facebook</Text>
                        <Text fontSize='xs'>Instagram</Text>
                        <Text fontSize='xs'>Twitter</Text>
                        <Text fontSize='xs'>Youtube</Text>
                        <Text fontSize='xs'>Linkdin</Text>
                        <br />
                    </Box>

                </Box>

            </Box>
        </Box>
    )
}

export default Footer