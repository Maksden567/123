import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import HomePage from './Pages/HomePage/HomePage.tsx'
import Terms from './Pages/TermsOfUs/TermsOfUs.tsx'
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy.tsx'
import OptOut from './Pages/OptOut/OptOut.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>
  },
  {
    path:'/terms',
    element:<Terms/>
  },
  {
    path:'/privacy',
    element:<PrivacyPolicy/>
  },
  {
    path:'/optout',
    element:<OptOut/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
