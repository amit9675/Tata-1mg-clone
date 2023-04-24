import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridToolbar } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { tokens } from '../../../theme';
import Header from '../../components/Header';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const AllProducts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [data,setData]=useState([])
    const getData=async()=>{
        try {
            await axios.get('https://alert-fox-jumpsuit.cyclic.app/getdata',{
              headers:{
                "Access-Control-Allow-Origin": "https://tangerine-axolotl-576458.netlify.app"
              }
            })
            .then(res=>setData(res.data))
            .then(res=>console.log(data))
        } catch (error) {
            console.log(error)
        }
    }
    const handleDelete=async(params)=>{
        try {
            await axios.delete(`https://alert-fox-jumpsuit.cyclic.app/admin/delete/${params.id}`)
            .then((res)=>getData())
            .then((res)=>console.log(data))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getData()
    },[])
  
    const columns = [
      { field: "_id", headerName: "ID", flex: 0.5, editable: true},
      {
        field: "name",
        headerName: "Name",
        flex: 1,
        editable: true,
        cellClassName: "name-column--cell",
      },
      {
        field: 'image',
        headerName: 'Image',
        width: 150,
        renderCell: (params) => <img src={params.value} />, // renderCell will render the component
      },
      {
        field: "subcategory",
        headerName: "Category",
        flex: 1,
        align:'center',
        editable: true,
      },
      {
        field: "subcat2",
        headerName: "Sub-Category",
        flex: 1,
        align:'center',
        editable: true,
      },
      {
        field: "mainprice",
        headerName: "Actual Price",
        flex: 1,
        align:'center',
        editable: true,
      },
      {
        field: "price",
        headerName: "Discounted-Price",
        flex: 1,
        align:'center',
        editable: true,
      },
      {
        field: "actions",
        type: "actions",
        headerName: ("Delete"),
        getActions: (params) => [
          <GridActionsCellItem
            key={0}
            icon={<DeleteOutlineOutlinedIcon titleAccess={("edit")} color="primary" />}
            label={("edit")}
            onClick={() => handleDelete(params)}
          />,
        ],
      },
    ];
  
    return (
      <Box m="10px">
        <Header
          title="ALL PRODUCTS"
          subtitle="List of All Products"
        />
        <Box
          m="-10px 0 0 0"
          height="100vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.blueAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.greenAccent[900],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.greenAccent[900],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          <DataGrid
            
            rows={data}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            getRowId={(row)=>row._id}
          />
        </Box>
      </Box>
    );
  };

export default AllProducts