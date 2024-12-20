import { HStack, Stack } from "@chakra-ui/react"
import { Skeleton, SkeletonCircle } from "@/components/ui/skeleton"


function SkeletonMy({count}){

    let arr = new Array(count).fill(null);

    return (<>
    {
        arr.map(()=>{
            return (
            <HStack m="1" p="5" gap="5">
                    <SkeletonCircle size="16"  />
                    <Stack flex="1">
                            <Skeleton height="5" />
                            <Skeleton height="5" width="80%" />
                    </Stack>
            </HStack> )
        })
    }
    </>)
}


export default SkeletonMy;