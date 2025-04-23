// import { StrictMode } from 'react'
import {createRoot} from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {AlertProvider} from "./_utilities/popups/AlertService.tsx";

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    // <StrictMode>
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
        <AlertProvider>
            <App />
        </AlertProvider>
    </QueryClientProvider>
    // </StrictMode>,
)
