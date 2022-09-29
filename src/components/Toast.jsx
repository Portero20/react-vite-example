import React from 'react'
import { Box, Button, useToast } from '@chakra-ui/react'


const Toast = () => {
    
    const toast = useToast()
  return (
    <Button
      onClick={() =>
        toast({
          title: 'Agregado al carrito.',
          description: "Se agrego correctamente.",
          status: 'error',
          duration: 2000,
          isClosable: true,
          position: 'bottom-right',
        })
      }
    >
      Show Toast
    </Button>
  )
      
}

export default Toast