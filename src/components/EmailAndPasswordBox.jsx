import { Box, Field, Input, defineStyle  } from "@chakra-ui/react"
import { Stack, Text } from "@chakra-ui/react"
import { PasswordInput, PasswordStrengthMeter } from "@/components/ui/password-input"
import { useState } from "react"

function EmailAndPasswordBox({email,setEmail,password,setPassword}){
    
    const [visible, setVisible] = useState(false);

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
                />
                <Field.Label css={floatingStyles}>Email</Field.Label>
            </Box>
        </Field.Root> 
        <Field.Root  m="4" >
            <Stack>
                <PasswordInput
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
            <PasswordStrengthMeter m="1"  w="72" value={1} />
        </Field.Root>  
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