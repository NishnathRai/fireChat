import SimpleInput from "@/components/SimpleInput";
import SkeletonMy from "@/components/SkeletonMy";
import UserCard from "@/components/UserCard";
import useGetAllUsers from "@/hooks/usegetAllUsers";
import { useState } from "react";


function SearchPage(){

    let [ allUsers , setAllusers ] = useState([]);
    let [ loading , setLoading ] = useState(true);
    useGetAllUsers(allUsers,setAllusers,setLoading);

    return (<>
        <div style={{height:"100%",width:"100%"}} >
            <SimpleInput/>
            <div
                style={{
                    height:"calc(100% - 10vh)",
                    overflowY:"scroll"
                }}
            >
                { 
                    loading ? 
                    <SkeletonMy key={1} count={6} /> : 
                    allUsers.map((user)=><UserCard key={user.Uid} user={user} />) 
                }
            </div>
        </div>
    </>)
}


export default SearchPage;