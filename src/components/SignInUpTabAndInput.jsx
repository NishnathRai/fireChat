import { Tabs , Image, Box, Text } from "@chakra-ui/react"
import { VscSignIn } from "react-icons/vsc";
import { LuFolder, LuUser } from "react-icons/lu";
import { useColorMode } from "./ui/color-mode";
import SigIn from "./SignIn";
import Signup from "./Signup";

function SignInUpTabAndInput(){

   

    return(<>
        <Tabs.Root 
            size="lg"
            defaultValue="Sign in" 
            variant="plain"
            style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
            }}
        >
            <Tabs.List   
                bg="bg.muted" 
                rounded="l3" 
                p="1"
            >
                <Tabs.Trigger value="Sign in">
                    <VscSignIn />
                     Sign in
                </Tabs.Trigger>
                <Tabs.Trigger  value="Sign up">
                    <LuUser />
                    Sign up
                </Tabs.Trigger>
                <Tabs.Indicator rounded="l2" />
            </Tabs.List>

            <Tabs.Content 
                value="Sign in"
            >
               <SigIn/>
            </Tabs.Content>
            <Tabs.Content 
                value="Sign up"
            >
                <Signup/>
            </Tabs.Content>
        </Tabs.Root>
    </>);
}

export default SignInUpTabAndInput;