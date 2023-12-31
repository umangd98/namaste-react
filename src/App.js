import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import { Provider } from "react-redux";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Contact from "./components/Contact";


const Contact = lazy(() => import("./components/Contact"))


const styleCard = {
    backgroundColor: "#f0f0f0"
}



const AppLayout = () => {

    const [userInfo, setUserInfo] = useState()
    

    //auth

    useEffect(()=> {
        //make api call
        const data = {
            name: "Umang Dhandhania"
        }
        setUserInfo(data.name)
    }, [])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userInfo
            , setUserInfo}}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
            </UserContext.Provider>
        </Provider>
    )
}


const appRouter = createBrowserRouter([
    {
        path: "/", 
        element: <AppLayout />,
        children: [
            {
                path:"/",
                element: <Body />
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path:"/contact",
                element: <Suspense fallback={<h1>Loading..</h1>}><Contact /></Suspense> 
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path:"/cart",
                element: <Cart />
            },
        ],
        errorElement: <Error />
    }
   
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)

