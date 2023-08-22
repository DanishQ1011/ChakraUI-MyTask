import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Grid, GridItem, Spacer } from "@chakra-ui/react"
import Sidebar from "../components/Sidebar"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50" >
      
      <GridItem 
        as="aside" 
        colSpan={{base: 6, lg: 2, xl: 1}}
        bg="green.400" 
        minH={{base:'10vh', lg:'100vh'}} 
        p={{base:'20px', lg:'30px'}}>
        
        <Sidebar/>

      </GridItem>
      
      <GridItem 
        as="main" 
        colSpan={{base: 6, lg: 4, xl: 5}}
        minH={{base:'10vh', lg:'100vh'}} 
        p="30px">
        <Navbar/>
        <Outlet />
      </GridItem>
    
    </Grid>
  )
}
