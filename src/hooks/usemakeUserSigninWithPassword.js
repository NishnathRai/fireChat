import checkEmailAndPassword from "@/functions/checkEmailAndPassword";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function usemakeUserSigninWithPassword(navigate,email,password,setEmail,setPassword,setErrorMessage,setShouldLode){
    ///
    if(!checkEmailAndPassword(email,password,setErrorMessage)) return;
    ///
    signInWithEmailAndPassword(auth,email,password)
    .then((val)=>{
        console.log(val);
        navigate("/");
    })
    .catch((e)=>{
        if(e?.message) setErrorMessage(e.message);
    })
}

export default usemakeUserSigninWithPassword;