import { useAuth0 } from '@auth0/auth0-react'

export default function LoginButton() {
  const { loginWithPopup } = useAuth0()

  return (
    <button
      className="align-center rounded bg-slate-100 pl-4 pr-2 text-right text-xl hover:underline"
      onClick={() => loginWithPopup()}
    >
      Sign In
    </button>
  )
}
