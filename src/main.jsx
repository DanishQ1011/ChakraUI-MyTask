import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

//const colors = {
//  brand:{
//    900: '#0F0F0F'
//    customizing colors
//  }
//}

//const fonts = {
//body: 'Tahoma'
//heading: 'Courier New'
//}

//const theme = extendTheme({colors, fonts})
//<ChakraProvider theme={theme}> ---->inside React.Strict-mode

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
