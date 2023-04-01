import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useState } from "react";

const AddProduct = () => {
    const [category,setCategory]=useState('')
  const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleCategoryChange=(e)=>{
        setCategory(e.target.value)
    }

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="ADD PRODUCT" subtitle="Add New Product" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(3, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Name}
                name="Name"
                error={!!touched.Name && !!errors.Name}
                helperText={touched.Name && errors.Name}
                sx={{ gridColumn: "span 2" }}
              />
              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                label="Category"
                onBlur={handleBlur}
                error={!!touched.Category&&!!errors.Category}
                helperText={touched.Category&&errors.Category}
                sx={{gridColumn:"span 2"}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                
                onChange={handleCategoryChange}
                >
                <MenuItem value={'Diabetes'}>Diabetes</MenuItem>
                <MenuItem value={'Veterinary'}>Veterinary</MenuItem>
                <MenuItem value={'Ayush'}>Ayush</MenuItem>
                <MenuItem value={'Ayurvedic'}>Ayurvedic</MenuItem>
                <MenuItem value={'Sexual Wellness'}>Sexual Wellness</MenuItem>
                </Select>
                </FormControl>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="ImageURL1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ImageURL1}
                name="ImageURL1"
                error={!!touched.ImageURL1 && !!errors.ImageURL1}
                helperText={touched.ImageURL1 && errors.ImageURL1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="url"
                label="ImageURL2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ImageURL2}
                name="ImageURL2"
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Price}
                name="Price"
                error={!!touched.Price && !!errors.Price}
                helperText={touched.Price && errors.Price}
                sx={{ gridColumn: "span 1.5" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Brand"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Brand}
                name="Brand"
                error={!!touched.Brand && !!errors.Brand}
                helperText={touched.Brand && errors.Brand}
                sx={{ gridColumn: "span 1.5" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add New Product
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};


const checkoutSchema = yup.object().shape({
    Name: yup.string().required("required"),
    Category: yup.string().required("required"),
    Brand: yup
        .string()
        .required("required"),
    Price: yup.string().required("required"),
    ImageURL1: yup.string().url("invalid url").required("required"),
    ImageURL2: yup.string().url("invalid url"),

});
const initialValues = {
  Name: "",
  Category: "",
  Brand: "",
  Price: "",
  ImageURL1: "",
  ImageURL2: "",
};

export default AddProduct;
