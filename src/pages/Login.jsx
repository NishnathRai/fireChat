import SignInUpTab from "@/components/SignInUpTab";
import { useColorMode } from "@/components/ui/color-mode";
import { Box, Flex } from "@chakra-ui/react";



function Login(){


    // console.log(useColorMode().colorMode);

    return (<>
    <div 
        style={{
            height:"100dvh",
            width:"100vw",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }} 
    >
        <SignInUpTab/>
    </div>
    </>);
}

export default Login;