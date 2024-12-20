import BottomHome from "@/components/BottomHome";
import useAuthState from "@/hooks/useAuthState";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import ChatPage from "./ChatPage";
import SearchPage from "./SearchPage";

function Home(){

    useAuthState(useLocation(),useNavigate());
    let presentTab = useSelector(store=>store.tabStore); 
    return (<>
        <div>
            <div style={{height:"90dvh"}} >
               <div style={{height:"7dvh",backgroundColor:"red"}} ></div>
               <div style={{height:"83dvh"}} >{ givePresentTab(presentTab) } </div> 
            </div>
            <BottomHome/>
        </div>
    </>)
}


function givePresentTab(tabName){
    if(tabName=="tab-1") return <ChatPage/>;
    else if(tabName=="tab-2") return <>Group</>;
    else if(tabName=="tab-3") return  <SearchPage/>;
    else return <>Profil</>;
}
export default Home;