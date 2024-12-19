import { Tabs } from "@chakra-ui/react"
import { MdChat , MdGroup  } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { RiProfileFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { change } from "@/store/tabStore";

function BottomHome(){

    let presentTab = useSelector(store=>store.tabStore);
    let dispatch = useDispatch();

    return (<>
    <Tabs.Root variant="enclosed" maxW="md" fitted onValueChange={(e)=>{dispatch(change(e))}} defaultValue={"tab-1"}>
      <Tabs.List h="10dvh"  pl="3" pr="3" alignItems="center" >
        <Tabs.Trigger rounded="full" p="4" h="7vh" value="tab-1"><MdChat size="xs" /></Tabs.Trigger>
        <Tabs.Trigger rounded="full" p="3" h="7vh" value="tab-2"><MdGroup  size="xxs"  /></Tabs.Trigger>
        <Tabs.Trigger rounded="full" p="4" h="7vh" value="tab-3"><FaSearch size="xxs" /></Tabs.Trigger>
        <Tabs.Trigger rounded="full" p="4" h="7vh" value="tab-4"><RiProfileFill size="xxs" /></Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
    </>);
}



export default BottomHome;