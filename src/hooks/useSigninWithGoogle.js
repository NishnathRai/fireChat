import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";
import addUserToDb from "@/functions/addUserToDb";


function useSigninWithGoogle(navigate){
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider)
    .then((val)=>{
        if(val.user.metadata.createdAt==val.user.metadata.lastLoginAt){
            addUserToDb(val.user.displayName,val.user.email,val.user.uid);
        }
        navigate("/");
    })
    .catch((err)=>{
        if(err.message=="auth/account-exists-with-different-credential"){
            console.log("Account has Already created with another Provider",err);
        }
        console.log(err);
    })
}

export default useSigninWithGoogle;