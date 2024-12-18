import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { Provider } from "@/components/ui/provider"
import logoB from "/src/assets/fireChat_transparent-BL.png";
import logoW from "/src/assets/fireChat_transparent-WL.png";
import { Image } from '@chakra-ui/react';
import { useColorMode } from './components/ui/color-mode.jsx';
import { useEffect } from 'react';


function Main(){

    let  { colorMode }  = useColorMode() ;

    return(<>
        <Image  
            borderRadius="16"  
            height="12" 
            src={ colorMode=="light" ? logoB : logoW }
            alt='Logo fireChat'
            style={{
                position:"fixed",
                top:"7px",
                left:"5px",
            }}
        />
        { console.log(colorMode)}
        <RouterProvider  router={router} />
    </>)
}



createRoot(document.getElementById('root')).render(
    <Provider>
        <Main/>
    </Provider>
)
