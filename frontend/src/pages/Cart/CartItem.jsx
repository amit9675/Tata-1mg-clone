import { Button, Flex, Image, Text } from '@chakra-ui/react'
import DeleteOutlineOutlined from '@mui/icons-material/DeleteOutlineOutlined'
import axios from 'axios'
import React, { useState } from 'react'

const CartItem = ({data,getData}) => {
    // const [price,setPrice]=useState(0)
    const [Quantity,setQuantity]=useState(data.quantity)
    const handleDelete=async()=>{
        try {
            await axios.delete(`https://combative-red-horse.cyclic.app/cart/delete_product/${data._id}`,{
                headers:{
                    "Authorization":localStorage.getItem('token')
                }
            })
            .then((res)=>getData())
        } catch (error) {
            console.log(error)
        }
    }

    const handleDecQuantity=async(id)=>{
        setQuantity(Quantity-1)
        try {
            await axios.patch(`https://combative-red-horse.cyclic.app/cart/updt_quantity/${id}`,{quantity:Quantity},{
                headers:{
                    "Authorization":localStorage.getItem('token')
                }
            })
            .then(res=>getData())
        
        } catch (error) {
            console.log(error)
        }
    }
    const handleIncQuantity=async(id)=>{
        setQuantity(Quantity+1)
        try {
            await axios.patch(`https://combative-red-horse.cyclic.app/cart/updt_quantity/${id}`,{quantity:Quantity},{
                headers:{
                    "Authorization":localStorage.getItem('token')
                }
            })
            .then(res=>getData())
        
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
            <Flex boxShadow={'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'} w='100%' h='200px' justifyContent={'center'} >
                    <Flex w='90%' alignItems={'center'} justifyContent={'space-between'} >
                        <Flex flexDir={'column'} gap={'5px'} textAlign={'left'} >
                            <Image h="100px" w='100px' src={data.image} alt={data.name} />
                            <Text>{data.name}</Text>
                            <Flex gap={'5px'} cursor={'pointer'} onClick={handleDelete} >
                                <DeleteOutlineOutlined/>
                                <Text>
                                    Remove
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex flexDir={'column'} gap={'20px'} >
                            <Text>Rs.{data.price*Quantity}.00</Text>
                            <Text as={'s'} fontSize={'small'} color={'grey'} >{data.mainprice}</Text>
                            <Flex gap='5px' alignItems='center' >
                                <Button isDisabled={Quantity===1} borderRadius={'22px'} bgColor={'rgb(255, 111, 97)'} h='20px' w='2px' onClick={()=>handleDecQuantity(data._id)} >-</Button>
                                <Text>{Quantity}</Text>
                                <Button isDisabled={Quantity===4} borderRadius={'22px'} bgColor={'rgb(255, 111, 97)'} h='20px' w='2px' onClick={()=>handleIncQuantity(data._id)} >+</Button>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>   
    </>
  )
}

export default CartItem