import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";


function useSigninWithGoogle(navigate){
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider)
    .then((val)=>{
        console.log(val);
        navigate("/");
    })
    .catch((err)=>{
        if(err.message="auth/account-exists-with-different-credential"){
            console.log("Account has Already created with another Provider");
        }
        console.log(err);
    })
}

export default useSigninWithGoogle;