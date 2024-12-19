import useAuthState from "@/hooks/useAuthState";
import { useLocation, useNavigate } from "react-router-dom";

function Home(){

    useAuthState(useLocation(),useNavigate());

    return (<>
    Hi from Home
    </>)
}

export default Home;