import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";
import addUserToDb from "@/functions/addUserToDb";

function useSigninWithGithub(navigate){
    const provider = new GithubAuthProvider();
    signInWithPopup( auth , provider )
    .then((val)=>{
        const createdAtInMinutes = Math.floor(val.user.metadata.createdAt / (1000 * 60));
        const lastLoginAtInMinutes = Math.floor(val.user.metadata.lastLoginAt / (1000 * 60));
        if( Math.abs(createdAtInMinutes-lastLoginAtInMinutes)<1){
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