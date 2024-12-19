import { useEffect, useState } from "react";
import EmailAndPasswordBox from "./EmailAndPasswordBox";
import usemakeUserSignupWithPassword from "@/hooks/usemakeUserSignupWithPassword";

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
            action={usemakeUserSignupWithPassword}
        />
    </>);
}

export default Signup;