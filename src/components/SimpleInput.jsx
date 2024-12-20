import { Input } from "@chakra-ui/react";

function SimpleInput({val,setValue}){
    return (<>
            <div
                style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    height:"10vh",
                    width:"100%"
                }}
            >
                <Input 
                    value={val}
                    onChange={(e)=>{
                        setValue(e.target.value);
                    }}
                    size="2xl" 
                    w="80vw" 
                    placeholder="Search" 
                />
            </div>
    </>)
}


export default SimpleInput;