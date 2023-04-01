
import Carousalsignup from "./Carousalsignup"
import { Link } from "react-router-dom";
import React, { useState } from 'react'

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
} from '@chakra-ui/react'

const Loginmodal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const HandleLogin=()=>{
        const user={
            email,
            password
           }
        //    fetch
    }

    return (
        <>
            <Button onClick={onOpen}>Login</Button>
            <Modal isOpen={isOpen} onClose={onClose} size="xl" >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Login</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box display="flex" justifyContent="space-between" >
                            <Box w='45%' h="300px" >
                                <Carousalsignup />
                            </Box>

                            <Box display="flex" flexDirection="column" w='50%' h="300px"  textAlign="center" alignItems="center" justifyContent="space-between"  >
                                <Text fontSize='md' as="b">Get access to your orders, lab tests & doctor consultations</Text>
                                 <Input w="90%" variant='flushed' placeholder='Enter Email' onChange={(e)=>setemail(e.target.value)} />
                                <Input w="90%" variant='flushed' placeholder='Enter Password' onChange={(e)=>setpassword(e.target.value)} />
                                <Button colorScheme='red' variant='solid' w="90%" onChange={HandleLogin} >Login</Button>
                                <Box display="flex" justifyContent="center" >
                                    <Text fontSize='md'>New on 1mg?</Text>
                                    <Link to="/Signupmodal" ><Text color="red" >Sign Up</Text></Link>
                                </Box>
                                <Box>
                                    <Text fontSize='xs'>By signing up, you agree to our</Text>
                                    <Text fontSize='xs'>Terms and Conditions & Privacy Policy</Text>
                                </Box>
                            </Box>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Loginmodal