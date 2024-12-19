import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";

function useSigninWithGithub(navigate){
    const provider = new GithubAuthProvider();
    signInWithPopup( auth , provider )
    .then((val)=>{
        console.log(val);
    })
    .catch((err)=>{
        if(err.message="auth/account-exists-with-different-credential"){
            console.log("Account has Already created with Google");
        }
    })
}

export default useSigninWithGithub;