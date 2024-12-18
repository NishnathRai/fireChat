import { Box, Button, Field, Input, defineStyle  } from "@chakra-ui/react"
import { Stack, Text } from "@chakra-ui/react"
import { PasswordInput, PasswordStrengthMeter } from "@/components/ui/password-input"
import { useState } from "react"
import usefindPasswordStrength from "@/hooks/usefindPasswordStrength";
import PopoverMy from "./PopoverMy";

function EmailAndPasswordBox({email,setEmail,password,setPassword,buttonText}){
    
    const [visible, setVisible] = useState(false);
    let Strenthvalue =usefindPasswordStrength(password);

    return (<>
        <Field.Root m="4" >
                <Box pos="relative" w="full">
                    <Input 
                        w="72"
                        className="peer" 
                        placeholder="" 
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        onFocus={()=>{
                            setPopup(true)
                        }}
                    />
                    <Field.Label css={floatingStyles}>Email</Field.Label>
                </Box>
        </Field.Root> 
        <PopoverMy message="A password should contain at least one lowercase letter, one uppercase letter, one number, and one special character to ensure strong security." >
        <Field.Root  m="4" >
            <Stack>
                <PasswordInput
                    invalid
                    w="72" 
                    defaultValue="secret"
                    visible={visible}
                    onVisibleChange={setVisible}
                    placeholder="Password"
                    mb="1px"
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                />
            </Stack>
            <PasswordStrengthMeter m="1"  w="72" value={Strenthvalue} />
            <Button w="72" >{buttonText}</Button>
        </Field.Root>  
        </PopoverMy>
    </>)
}


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