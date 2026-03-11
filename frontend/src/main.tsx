import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { BrowserRouter } from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query"
import { ClerkProvider } from "@clerk/react"

import App from "./App"
import "./index.css"

import { queryClient } from "./lib/queryClient"

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!clerkPubKey) {
  throw new Error("Missing Clerk Publishable Key")
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>
)