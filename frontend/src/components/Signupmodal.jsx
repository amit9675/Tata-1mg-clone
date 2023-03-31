import React from 'react'
import Carousalsignup from "./Carousalsignup"
import { Link } from "react-router-dom";


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

const Signupmodal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>Sign Up</Button>
            <Modal isOpen={isOpen} onClose={onClose} size="xl" >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Sign Up</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box display="flex" justifyContent="space-between" >
                            <Box w='45%' h="300px" >
                                <Carousalsignup />
                            </Box>

                            <Box display="flex" flexDirection="column" w='50%' h="300px"  textAlign="center" alignItems="center" justifyContent="space-between"  >
                                <Text fontSize='md' as="b">Please enter your Mobile No to receive One-Time password</Text>
                                <Input w="90%" variant='flushed' placeholder='Enter Mobile No' />
                                <Box display="flex"  >
                                    <input type="checkbox" />
                                    <Box paddingLeft="5px">
                                        <Text fontSize='xs'>Are you a healthcare Professional</Text>
                                    </Box>
                                </Box>
                                <Button colorScheme='red' variant='solid' w="90%" >Continue</Button>
                                <Box display="flex" justifyContent="center" >
                                    <Text fontSize='md'>Have an account?</Text>
                                    <Link to="/Loginmodal" ><Text color="red" >Login</Text></Link>
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

export default Signupmodal