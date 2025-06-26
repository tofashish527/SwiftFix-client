
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Router/Router'
import { RouterProvider } from 'react-router'
import AuthProvider from './Context/AuthProvider'

createRoot(document.getElementById('root')).render(
 
    <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>
  
)
