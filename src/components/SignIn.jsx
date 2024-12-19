import { useEffect, useState } from "react";
import EmailAndPasswordBox from "./EmailAndPasswordBox";
import { Button } from "@chakra-ui/react";
import usemakeUserSigninWithPassword from "@/hooks/usemakeUserSigninWithPassword";

function SigIn(){

    let [ email , setEmail ] = useState("");
    let [ password , setPassword ] = useState("");

    return (<>
        <EmailAndPasswordBox
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            buttonText={"Sign in"}
            action={usemakeUserSigninWithPassword}
        />
    </>);
}




export default SigIn;