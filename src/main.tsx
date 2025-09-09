// import { StrictMode } from 'react'
import {createRoot} from "react-dom/client";
// import './index.css'
// import App from "./App.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {AlertProvider} from "./_utilities/popups/AlertService.tsx";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./error-page/error-page.tsx";
import React from "react";

import {lazy, Suspense} from "react";
import Loading from "./_utilities/Loading.tsx";

const App = lazy(() => import("./App.tsx"));

// Create a client
const queryClient = new QueryClient();

// Wrap app with shared providers
const withProviders = (element: React.ReactNode) => (
    <QueryClientProvider client={queryClient}>
        <AlertProvider>{element}</AlertProvider>
    </QueryClientProvider>
);

const About = lazy(() => import("./pages/about/About.tsx"));
const Career = lazy(() => import("./pages/career/Career"));
const News = lazy(() => import("./pages/news/News"));
const Contact = lazy(() => import("./pages/contact/Contact"));

// Define routes using the Data Router API
const router = createBrowserRouter([
    {
        path: "/",
        element: (
            // <Suspense fallback={<div>Loading...</div>}>
            //   <App />
            // </Suspense>
            <Suspense fallback={<Loading visible={true}/>}>
                <App/>
            </Suspense>
        ),
        errorElement: <ErrorPage/>,
        children: [
            {path: "about", element: <About/>},
            {path: "career", element: <Career/>},
            {path: "news", element: <News/>},
            {path: "contact", element: <Contact/>},
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    // <StrictMode>
    // Provide the client to your App
    withProviders(<RouterProvider router={router}/>)
    // </StrictMode>,
);
