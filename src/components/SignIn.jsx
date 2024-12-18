import { useEffect, useState } from "react";
import EmailAndPasswordBox from "./EmailAndPasswordBox";

function SigIn(){

    let [ email , setEmail ] = useState("");
    let [ password , setPassword ] = useState("");

    return (<>
        <EmailAndPasswordBox
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
        />
    </>);
}




export default SigIn;