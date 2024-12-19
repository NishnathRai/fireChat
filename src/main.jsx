import { createRoot } from 'react-dom/client'
import { RouterProvider, useLocation } from 'react-router-dom'
import router from './router.jsx'
import { Provider } from "@/components/ui/provider"
import logoB from "/src/assets/fireChat_transparent-BL.png";
import logoW from "/src/assets/fireChat_transparent-WL.png";
import { Image } from '@chakra-ui/react';
import { useColorMode } from './components/ui/color-mode.jsx';
import useAuthState from './hooks/useAuthState.js';


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
                top:"13px",
                left:"7px",
            }}
        />
        <RouterProvider  router={router} />
    </>)
}



createRoot(document.getElementById('root')).render(
    <Provider>
        <Main/>
    </Provider>
)
