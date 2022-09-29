import './App.css'
import Index from './components/Index'
import { ChakraProvider } from '@chakra-ui/react'
import Hello from './components/Hello'



function App() {
  

  return (
    <ChakraProvider>


      <Index/>
      <Hello/>

      
  
    </ChakraProvider>
  )
}

export default App
