import { useAuth } from "@clerk/react"
import { Navigate } from "react-router-dom"

export default function ProtectedRoute({ children }: any) {
  const { isSignedIn, isLoaded } = useAuth()

  if (!isLoaded) {
    return <div className="flex items-center justify-center h-screen text-white">
      Loading...
    </div>
  }

  if (!isSignedIn) {
    return <Navigate to="/login" replace />
  }

  return children
}