import React from 'react'
import { Center, Square, Circle,Heading, Box, Image, Highlight } from '@chakra-ui/react'
import { Button, ButtonGroup} from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon,SearchIcon } from '@chakra-ui/icons'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import { Code } from '@chakra-ui/react'

import {
Drawer,
DrawerBody,
DrawerFooter,
DrawerHeader,
DrawerOverlay,
DrawerContent,
DrawerCloseButton,
} from '@chakra-ui/react'
import Toast from './Toast'
import Transitions from './Transitions'



const Hello = () => {
return (
<div>
  <Center bg='tomato' w='50rem' h='200px' color='white'>
    <h1>Exequiel</h1>
    <Button colorScheme='green' size="lg">Button</Button>
  </Center>

  <Stack direction='row' spacing={4}>
    <Button isLoading colorScheme='teal' variant='solid'>
      Email
    </Button>
    <Button isLoading loadingText='Submitting' colorScheme='teal' variant='outline'>
      Submit
    </Button>
  </Stack>


  <IconButton aria-label='Search database' colorScheme='blue' icon={<SearchIcon />} />
  <Heading noOflines={1}>Hola me llamo portero daniel exequiel</Heading>
  <Heading as="h2" size="2xl">Hola mundo</Heading>


  <Flex direction="row" justify="center" align="center">

    <Wrap>
      <WrapItem>
        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
      </WrapItem>
      <WrapItem>
        <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
      </WrapItem>
      <WrapItem>
        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
      </WrapItem>
      <WrapItem>
        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
      </WrapItem>
      <WrapItem>
        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
      </WrapItem>
      <WrapItem>
        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
      </WrapItem>
      <WrapItem>
        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
      </WrapItem>
    </Wrap>

  </Flex>

  <Stack align='center' direction='row'>
  <Switch size='sm' />
  <Switch size='md' />
  <Switch size='lg' />
</Stack>

<Code children="console.log(welcome)" colorScheme="red"/>


<Toast/>

<Transitions/>

<Flex direction="row" mt="50px" justify="center" py="100px">
<Box boxSize='xl'>
  <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
  <Image mt="30px" src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
</Box>
</Flex>

<Heading lineHeight='tall'>
  <Highlight
    query='spotlight'
    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
  >
    With the Highlight component, you can spotlight words.
  </Highlight>
</Heading>

</div>



)
}

export default Hello