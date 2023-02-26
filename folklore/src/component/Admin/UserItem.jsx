import React, { useState } from 'react'
import { DeleteIcon, EditIcon} from '@chakra-ui/icons'
import { Button, Flex, Td, Text, Tr } from '@chakra-ui/react'

const UserItem = ({id, name, email, status}) => {
    const [state, setState] = useState(true);
    const onClick = () => {
        setState(!state);
    }
  return (
    <Tr>
        <Td>{id}</Td>
        <Td>{name}</Td>
        <Td>{email}</Td>
        <Td>
            <Button colorScheme={status==="Online"? "green": "yellow"} size="sm">{status}</Button>
        </Td>
        <Td>
            <Button variant={"ghost"}>
                <Flex color="red" alignItems="center" gap="10px">
                    <DeleteIcon/>
                    <Text fontWeight={600}>DELETE</Text>
                </Flex>
            </Button>
            {state? <Button onClick={onClick} colorScheme={"green"} fontWeight={600}>
                <Flex color="white" alignItems="center" gap="10px">
                    <Text>ACTIVE USER</Text>
                </Flex>
            </Button> 
                :
            <Button onClick={onClick} colorScheme={"red"} fontWeight={600}>
                <Flex color="white" alignItems="center" gap="10px">
                    <Text>RESTRICTED USER</Text>
                </Flex>
            </Button>}
            
        </Td>
    </Tr>
  )
}

export default UserItem