
import { Badge, Box, Card, HStack, Image } from "@chakra-ui/react"


function UserCard(){
    return (<>
        <Card.Root flexDirection="row" m="2" p="2" pl="5" rounded="none" border="none"  overflow="hidden" maxW="xl">          
            <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                h="16"
                w="16"
                mr="5"
                rounded="full"
             />
            <Box>
                <Card.Title  mb="2" >The perfect latte</Card.Title>
                <HStack >
                    <Badge>Hot</Badge>
                    <Badge>Caffeine</Badge>
                </HStack>
            </Box>
        </Card.Root>
    </>)
}

export default UserCard;