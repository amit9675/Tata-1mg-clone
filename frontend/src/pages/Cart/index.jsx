import { Box, Button, Divider, Flex, Grid, Image, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from '@chakra-ui/react'
import DeleteOutlineOutlined from '@mui/icons-material/DeleteOutlineOutlined'
import { GridSearchIcon } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import PaymentForm from './FormControl'

const CartPage = () => {
    const [data,setData]=useState([])
    const [isloading,setIsLoading]=useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [sum,setSum]=useState(0)
    let totalSum=sum
    const toast = useToast()
    useEffect(()=>{
        getData()
    },[])

    data.map((ele)=>{
        return(totalSum+=ele.quantity*ele.price)
    })

    const getData=async()=>{
        try {
            await axios.get('https://combative-red-horse.cyclic.app/cart/get_products',{
                headers:{
                    "Authorization":localStorage.getItem('token')
                }
            })
            .then(res=>setData(res.data.Data))
            .then(res=>console.log(data))
        } catch (error) {
            
        }
    }
        const handlePay=()=>{
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            onClose()
            toast({
                title: "Payment Successful.",
                description: "Order will be shipped in few days",
                status: "success",
                duration: 5000,
                isClosable: true,
              })
        }, 5000);
    }
  return (
    <>
    <Box w='100%' h='100vh' bgColor={'#fff'} >
         {/*Cart Navbar  */}
         <Flex w='100%' h={'60px'} as="nav" bg="bg-surface" boxShadow="sm" border={'0px solid black'} justifyContent='space-evenly' alignItems={'center'}>
            <Flex w='80%' gap={'20px'}>
                <Image w={'10%'} h='100%' src='https://imgtr.ee/images/2023/04/01/U6Ot4.jpg' alt="medihub"/>
                <InputGroup alignItems={'center'} >
                    <Input type='tel' placeholder='Search' w='60%' />
                    <InputLeftElement
                    mt='35px'
                    pointerEvents='none'
                    children={<GridSearchIcon color='gray.300' />}
                    />
                </InputGroup>
            </Flex>
            <Box>
                <Text>
                    Need Help?
                </Text>
            </Box>
         </Flex>
         {/* Main Cart parent */}

        <Box>
            <Flex w='80%' m='80px auto auto auto' h='100vh'  justifyContent={'center'} gap="30px" >
            <Flex flexDir={'column'} w='60%' border={'1px solid aqua'} gap={'10px'} >
            {
                data.map((ele,id)=>{
                    return(
                        <CartItem data={ele} getData={getData} key={id}/>
                    )
                    })
                }
            </Flex>
                <Flex boxShadow={'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'} w={'30%'} h='300px' flexDir='column' alignItems={'center'}  >
                    <Flex justifyContent={'space-between'} flexDir='row' w="90%" mt='10px' >
                            <Text fontSize={'small'} color='grey' >Item Total(MRP)</Text>
                            <Text>Rs.{totalSum}</Text>
                    </Flex>
                    <Flex justifyContent={'space-between'} flexDir='row' w="90%" mt='10px' >
                            <Text fontSize={'small'} color='grey' >Price Discount</Text>
                            <Text fontSize={'small'} color='grey' >main_Price-Discounted_price</Text>
                    </Flex>
                    <Divider orientation='horizontal'/>
                    <Flex justifyContent={'space-between'} flexDir='row' w="90%" mt='10px' >
                            <Text fontSize={'small'} color='grey' >Shipping Fee</Text>
                            <Text fontSize={'small'} color='grey' >As per delivery Address</Text>
                    </Flex>
                    <Divider orientation='horizontal'/>
                    <Flex justifyContent={'space-between'} flexDir='row' w="90%" mt='10px' >
                            <Text fontWeight={'medium'} >To be paid</Text>
                            <Text>Discounted Price</Text>
                    </Flex>
                    <Flex bgColor={'#e4f6e7'} justifyContent={'space-around'} gap="80px" flexDir='row' w="100%" mt='10px' h='50px' alignItems={'center'}  >
                            <Text fontSize={'small'} >Total Savings</Text>
                            <Text color='#1aab2a' >main_Price</Text>
                    </Flex>
                    <Flex mt='20px' >
                        <Button bgColor={'rgb(255, 111, 97)'} color='white' ml='4'
                        onClick={() => {
                        onOpen()
                        }} >CHECKOUT</Button>
                        <Modal isCentered isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay
                            bg='none'
                            backdropFilter='auto'
                            backdropInvert='80%'
                            backdropBlur='2px'
                            />
                        <ModalContent>
                        <ModalHeader>Payment Gateway</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            {/* <Grid gridTemplateColumns='repeat(1,1fr)' >
                                <Input type="number" placeholder='Enter Card Number'  />
                                <Input type='month' placeholder='MM/yyyy' />
                                <Input type='password' placeholder='Enter CVV'/>
                            </Grid> */}
                            <PaymentForm onClose={()=>onClose()} />
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" colorScheme="purple" width="full" isLoading={isloading} onClick={handlePay}>Pay</Button>
                        </ModalFooter>
                        </ModalContent>
                    </Modal>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    </Box>
    </>
  )
}

export default CartPage
