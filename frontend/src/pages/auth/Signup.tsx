import { SignUp } from "@clerk/react"

export default function Signup() {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignUp
        routing="path"
        path="/signup"
        signInUrl="/login"
        forceRedirectUrl="/dashboard"
      />
    </div>
  )
}