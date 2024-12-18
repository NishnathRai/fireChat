import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { Provider } from "@/components/ui/provider"

createRoot(document.getElementById('root')).render(
    <Provider>
    <RouterProvider  router={router} />
    </Provider>
)
