import AuthUsingProviders from "@/components/AuthUsingProviders";
import OrLine from "@/components/OrLine";
import SignInUpTabAndInput from "@/components/SignInUpTabAndInput";
import { useColorMode } from "@/components/ui/color-mode";
import { Box, Flex } from "@chakra-ui/react";



function Login(){



    return (<>
        <div 
            style={{
                height:"100dvh",
                width:"100vw",
                paddingTop:"5vh",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column"
            }} 
        >
            <SignInUpTabAndInput/>
            <AuthUsingProviders/>
        </div>
    </>);
}

export default Login;