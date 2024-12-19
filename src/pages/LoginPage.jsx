import AuthUsingProviders from "@/components/AuthUsingProviders";
import SignInUpTabAndInput from "@/components/SignInUpTabAndInput";
import useAuthState from "@/hooks/useAuthState";
import { useLocation, useNavigate } from "react-router-dom";


function Login(){

    useAuthState(useLocation(),useNavigate());

    return (<>
        <div 
            style={{
                height:"100dvh",
                width:"100vw",
                paddingTop:"4vh",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column"
            }} 
        >
            <SignInUpTabAndInput/>
            <AuthUsingProviders/>
        </div>
    </>);
}

export default Login;