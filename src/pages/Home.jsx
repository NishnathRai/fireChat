import BottomHome from "@/components/BottomHome";
import addUserToDb from "@/functions/addUserToDb";
import useAuthState from "@/hooks/useAuthState";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home(){

    useAuthState(useLocation(),useNavigate());

    return (<>
        <div>
            <div style={{height:"90dvh"}} ></div>
            <BottomHome/>
        </div>
    </>)
}

export default Home;