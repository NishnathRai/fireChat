import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import checkEmailAndPassword from "@/functions/checkEmailAndPassword";

function usemakeUserSignupWithPassword(navigate,email,password,setEmail,setPassword,setErrorMessage,setShouldLode){
    ///
    if(!checkEmailAndPassword(email,password,setErrorMessage)) return;
    ///
    setShouldLode(true);
    createUserWithEmailAndPassword(auth,email,password)
    .then((val)=>{
        setEmail("");
        setPassword("");
        setErrorMessage("");
        console.log(val);
        navigate("/");
    })
    .catch((err)=>{
        if(err?.message) setErrorMessage(err?.message);
    });
    setShouldLode(false);
}



export default usemakeUserSignupWithPassword;