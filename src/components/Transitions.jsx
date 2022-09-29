import React from 'react'
import { Box, Button, Fade, ScaleFade, Slide, SlideFade, useDisclosure} from '@chakra-ui/react'
import { Kbd } from '@chakra-ui/react'

const Transitions = () => {

const { isOpen, onToggle } = useDisclosure()

return (
<>
    <Button onClick={onToggle}>Click Me</Button>
    <ScaleFade initialScale={0.9} in={isOpen}>
        <Box p='40px' color='white' mt='4' bg='teal.500' rounded='md' shadow='md'>
            Prestar atencion
        </Box>
    </ScaleFade>

    <span>
        <h2>Teclado</h2>
        <Kbd>shift</Kbd> + <Kbd>H</Kbd>
    </span>

</>


)
}

export default Transitions