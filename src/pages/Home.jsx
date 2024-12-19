import BottomHome from "@/components/BottomHome";
import addUserToDb from "@/functions/addUserToDb";
import useAuthState from "@/hooks/useAuthState";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function Home(){

    useAuthState(useLocation(),useNavigate());
    let presentTab = useSelector(store=>store.tabStore); 
    return (<>
        <div>
            <div style={{height:"90dvh"}} >
                { givePresentTab(presentTab) }
            </div>
            <BottomHome/>
        </div>
    </>)
}


function givePresentTab(tabName){
    if(tabName=="tab-1") return <>Chat</>;
    else if(tabName=="tab-2") return <>Group</>;
    else if(tabName=="tab-3") return <>Search</>;
    else return <>Profil</>;
}
export default Home;