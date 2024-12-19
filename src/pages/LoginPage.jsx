import AuthUsingProviders from "@/components/AuthUsingProviders";
import SignInUpTabAndInput from "@/components/SignInUpTabAndInput";


function Login(){



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