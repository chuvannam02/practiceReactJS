// import { StrictMode } from 'react'
import {createRoot} from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {AlertProvider} from "./_utilities/popups/AlertService.tsx";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./error-page/error-page.tsx";
import React from "react";

// Create a client
const queryClient = new QueryClient();

// Wrap app with shared providers
const withProviders = (element: React.ReactNode) => (
    <QueryClientProvider client={queryClient}>
        <AlertProvider>{element}</AlertProvider>
    </QueryClientProvider>
);

// Define routes using the Data Router API
const router = createBrowserRouter([
    {
        path: '/',
        element: withProviders(<App />),
        errorElement: <ErrorPage />,
    },
]);

createRoot(document.getElementById('root')!).render(
    // <StrictMode>
    // Provide the client to your App
    <RouterProvider router={router} />
    // </StrictMode>,
)
