import { Text } from "@chakra-ui/react"
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"


function PopoverMy(props){
    return (
        <PopoverRoot lazyMount unmountOnExit>
          <PopoverTrigger asChild>
              {props.children}
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              <PopoverTitle fontWeight="medium">Password</PopoverTitle>
              <Text my="4">
                {props.message}
              </Text>
            </PopoverBody>
          </PopoverContent>
        </PopoverRoot>)
};

export default PopoverMy;