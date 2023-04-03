import React from 'react'
import { ColorModeContext,useMode } from '../theme'
import { Box, CssBaseline,ThemeProvider } from '@mui/material'
import {Routes,Route} from "react-router-dom"
import TopBar from './Pages/Dashboard/Global/TopBar'
import Dashboard from './Pages/Dashboard'
import Sidebar from './Pages/Dashboard/Global/Sidebar'
import Users from './Pages/Dashboard/Users'
import AddProduct from './Pages/AddProduct'
import FAQ from './Pages/FAQ'
import AllProducts from './Pages/AllProduct'
// import Team from "./Pages/Team"/
const Admin = () => {
    const [theme,colorMode]=useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className='app' >
                <Sidebar/>
            <main className='content'>
                <TopBar/>
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path='/users' element={<Users/>}/>
                    <Route path='/allProducts' element={<AllProducts/>}/>
                    <Route path="/addproduct" element={<AddProduct/>}/>
                    <Route path="/faq" element={<FAQ/>}/>
                </Routes>
                {/* <Dashboard/> */}
            </main>
            </div>
        </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default Admin