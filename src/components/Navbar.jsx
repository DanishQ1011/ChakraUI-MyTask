import { UnlockIcon } from '@chakra-ui/icons'
import { Avatar, AvatarBadge, Box, Button, Flex, HStack, Heading, Show, Spacer, Text, useToast } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
  const toast = useToast()

  const showToast = () => {
    toast({
      title: 'Logged out',
      description: 'Successfully logged out',
      duration: 5000,
      isClosable: true,
      status: 'success',
      position: 'top',
      icon: <UnlockIcon/>,
    })
  }
  return (

    <Flex as="nav" p="10px" mb="25px" alignItems="center" >
        <Heading as="h1">MyTasks</Heading>
        <Spacer/>

        <HStack spacing="20px">
            <Avatar src="./public/img/me.png">
              <AvatarBadge width='1.3em' bg='green.400'>
                <Text fontSize='xs' color='white'>3</Text>
              </AvatarBadge>
            </Avatar>
            <Text>shah@gmail.com</Text>
            <Button colorScheme='green' onClick={showToast}>Logout</Button>
        </HStack>
    </Flex>
  )
}

