import { useAuth0 } from '@auth0/auth0-react'

export default function LoginButton() {
  const { loginWithPopup } = useAuth0()

  return (
    <button
      className="h-auto w-48 m-2 p-4 bg-slate-100 rounded"
      onClick={() => loginWithPopup()}
    >
      Log In
    </button>
  )
}
