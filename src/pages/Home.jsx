import addUserToDb from "@/functions/addUserToDb";
import useAuthState from "@/hooks/useAuthState";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home(){

    useAuthState(useLocation(),useNavigate());
    let [ image , setImage  ] = useState("");

    return (<>
    <input type="file" onInput={(e)=>{
        addUserToDb(e.target.files[0]);
    }} />
    <button onClick={()=>{ addUserToDb() }} ></button>
    Hi from Home
    </>)
}

export default Home;