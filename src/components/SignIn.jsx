import { useEffect, useState } from "react";
import EmailAndPasswordBox from "./EmailAndPasswordBox";
import { Button } from "@chakra-ui/react";

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
        />
    </>);
}




export default SigIn;