import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect } from "react";

function useAuthState(location,navigate){
    console.log(location.pathname);
    useEffect( ()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user) {
                if( location.pathname=="/login" ){
                    navigate("/");
                }
                console.log(user);
            }
            else{
                if( location.pathname!="/login" ){
                    navigate("/login");
                }
                console.log("user is not there");
            }
        })
    } , [])
}


export default useAuthState;