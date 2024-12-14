import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from './route/Root.jsx'
import Home from './component/Home.jsx';
import InquiryForm from './component/InquiryForm.jsx';
const router=createBrowserRouter([
  {
    path:'/',
    element:<Root />,
    children:[
      {path:'/',element:<Home/>},
      {path:'/enq',element:<InquiryForm/>}
    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/> 
  </StrictMode>,
)
