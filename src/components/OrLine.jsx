import { Box } from "@chakra-ui/react";

function OrLine(){

    return (<>
        <Box 
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            w="72"
        > 
            <HLine/>
            OR 
            <HLine/>
        </Box>
    </>);
}

function HLine(){
    return (<hr style={{borderTop:"1.5px solid #333"}} width="30%" /> );
}


export default OrLine;