import { useEffect, useState } from "react";
import EmailAndPasswordBox from "./EmailAndPasswordBox";

function Signup(){

    let [ email , setEmail ] = useState("");
    let [ password , setPassword ] = useState("");

    return (<>
        <EmailAndPasswordBox
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            buttonText={"Sign up"}
        />
    </>);
}

export default Signup;