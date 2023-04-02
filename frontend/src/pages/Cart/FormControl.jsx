import { useFormik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack
} from "@chakra-ui/react";
import { useState } from "react";

export default function PaymentForm(onClose) {
    const [isloading,setIsLoading]=useState(false)
    const handlePay=()=>{
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            onClose()
        }, 5000);
    }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <Flex bg="gray.100" align="center" justify="center" h="60vh">
      <Box bg="white" p={6} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="email">Enter Card Number</FormLabel>
              <Input
                id="email"
                name="email"
                type="number"
                placeholder="Enter Card Number"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Expiry Date</FormLabel>
              <Input
                id="password"
                name="password"
                type="month"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Enter Cvv</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter CVV Number"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </FormControl>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}


   