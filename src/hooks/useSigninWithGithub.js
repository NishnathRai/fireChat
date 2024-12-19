import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";
import addUserToDb from "@/functions/addUserToDb";

function useSigninWithGithub(navigate){
    const provider = new GithubAuthProvider();
    signInWithPopup( auth , provider )
    .then((val)=>{
        if(val.user.metadata.createdAt==val.user.metadata.lastLoginAt){
            addUserToDb(val.user.displayName,val.user.email,val.user.uid);
        }
        navigate("/");
    })
    .catch((err)=>{
        if(err.message=="auth/account-exists-with-different-credential"){
            console.log("Account has Already created with Google");
        }
        console.log(err);
    })
}

export default useSigninWithGithub;