import React from 'react'
import "./App.css"
import Navbar from "./components/Navbar.jsx"
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx'
import VehicleEntryForm from './components/VehicleEntryForm.jsx'
import VehicleExit from "./components/VehicleExit.jsx";
import VehicleHistory from "./components/VehicleHistory.jsx"
import BillingPage from "./components/BillingPage.jsx";



function App() {
    const routing = createBrowserRouter([
        {
            path:"/",
            element: (
                <>
                <Navbar btnshow={true}/>
                <Home/>
                <Footer/>
                </>
            )

        },
        {
            path:"/adminlogin",
            element:(
                <>
                <Navbar btnshow={true}/>
                <Login/>
                <Footer/>
                </>
            )
        },
        {
            path:"/admin_dashbord",
            element:(
                <>
                <Navbar btnshow={false} />
                <Dashboard/>
                <Footer/>
                </>
            ),
        },
        {
            path:"/admin_dashbord/vehicle_entry",
            element:(
                <>
                <Navbar btnshow={false} />
                <VehicleEntryForm/>
                <Footer/>
                </>
            ),

        },
        {
              path: "/admin_dashbord/vehicle_entry/billingpage",
              element: (
                <>
                  <Navbar btnshow={false} />
                  <BillingPage />
                  <Footer />
                </>
              ),
            },
            {
      path: "/admin_dashbord/vehicle_exit",
      element: (
        <>
          <Navbar btnshow={false} />
          <VehicleExit />
         
        </>
      ),
    },
    {
      path: "/admin_dashbord/vehicle_history",
      element: (
        <>
          <Navbar btnshow={false} />
          <VehicleHistory />
          
        </>
      ),
    },



    ])
  return <RouterProvider router ={routing}/>
   
}

export default App
