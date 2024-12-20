import { collection, getDocs, limit, orderBy, query , startAfter } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect } from "react";

function useGetAllUsers(Users,setUsers,setLoder){
    useEffect(()=>{
        getAllUsers().then((data)=>{
            setLoder(false);
            setUsers(data);
        })
    },[]);
}
let lastOne = null;
async function getAllUsers() {
    const userCollectionRef = collection(db,"Users");
    let q = query(userCollectionRef,limit(10),orderBy("Uid"));
    if (lastOne) {
        q = query(q, startAfter(lastOne));
    }
    let Users  = await getDocs(q);
    let FUsers = Users.docs.map((val)=>{
        return val.data();
    })
    lastOne = Users.docs[ Users.docs.length -1 ];
    return FUsers;
}

export default useGetAllUsers;