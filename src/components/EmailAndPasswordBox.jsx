import { Box, Button, Field, Input, ProgressCircleRoot, defineStyle  } from "@chakra-ui/react"
import { Stack, Text } from "@chakra-ui/react"
import { PasswordInput, PasswordStrengthMeter } from "@/components/ui/password-input"
import { useState } from "react"
import usefindPasswordStrength from "@/hooks/usefindPasswordStrength";
import PopoverMy from "./PopoverMy";
import { useNavigate } from "react-router-dom";
import { ProgressCircleRing } from "./ui/progress-circle";

function EmailAndPasswordBox({email,setEmail,password,setPassword,buttonText,action}){
    
    const [visible, setVisible] = useState(false);
    let Strenthvalue =usefindPasswordStrength(password);
    const navigate = useNavigate();
    let [  errorMessage , setErrorMessage ] = useState("");
    let [ shouldLode ,setShouldLode ] = useState(false);

    return (<>
        <Field.Root m="4" >
                <Box pos="relative" w="full">
                    <Input 
                        w="72"
                        className="peer" 
                        placeholder="" 
                        value={email}
                        size="lg"
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                    />
                    <Field.Label css={floatingStyles}>Email</Field.Label>
                </Box>
        </Field.Root> 
        <Field.Root  m="4" >
            <PopoverMy message="A password should contain at least one lowercase letter, one uppercase letter, one number, and one special character to ensure strong security." >
            <Stack>
                <PasswordInput
                    w="72" 
                    defaultValue="secret"
                    visible={visible}
                    onVisibleChange={setVisible}
                    placeholder="Password"
                    mb="1px"
                    size="lg"
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                />
            </Stack>
            </PopoverMy>
            <PasswordStrengthMeter  w="72" value={Strenthvalue} />
            <Text color="red" m="0" w="72" > { errorMessage.length!=0 ? errorMessage : "" } </Text> 
            <Button onClick={()=>{action(navigate,email,password,setEmail,setPassword,setErrorMessage,setShouldLode)}} w="72" >{ shouldLode ? loder : buttonText}</Button>
        </Field.Root>  
    </>)
}

let loder = <ProgressCircleRoot value={null} size="xs">
<ProgressCircleRing  cap="round" />
</ProgressCircleRoot> ;

const floatingStyles = defineStyle({
    pos: "absolute",
    bg: "bg",
    px: "0.5",
    top: "-3",
    insetStart: "2",
    fontWeight: "normal",
    pointerEvents: "none",
    transition: "position",
    _peerPlaceholderShown: {
      color: "fg.muted",
      top: "2.5",
      insetStart: "3",
    },
    _peerFocusVisible: {
      color: "fg",
      top: "-3",
      insetStart: "2",
    },
})

export default EmailAndPasswordBox;    