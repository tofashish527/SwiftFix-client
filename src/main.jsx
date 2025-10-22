
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import AuthProvider from './Context/AuthProvider'
import "leaflet/dist/leaflet.css";
import router from './Router/router';


createRoot(document.getElementById('root')).render(
 
    <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>
  
)
