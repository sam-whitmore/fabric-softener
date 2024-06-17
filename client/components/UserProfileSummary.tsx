import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import DropdownMenu from './DropdownMenu'
import LoginButton from './LoginButton'
import { useQuant } from './App'
import { Link } from 'react-router-dom'

export default function UserProfileSummary() {
  const [quant, setQuant] = useQuant()
  const [showMenu, setShowMenu] = useState(false)
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) return <div>Loading Profile...</div>
  if (!user)
    return (
      <div className="group my-4 ml-auto mr-4 flex items-center rounded-full bg-slate-50 p-2 shadow-lg">
        <LoginButton />
        <button
          id="quant-summary"
          className="h-12 w-12 rounded-full text-4xl font-light hover:border-2"
        >
          <Link to="/">{(quant / 1000).toFixed(0)}</Link>
        </button>
      </div>
    )

  return (
    isAuthenticated && (
      <div className="group my-4 ml-auto mr-4 flex items-center rounded-full bg-slate-50 p-2 shadow-lg">
        <div className="align-center hidden pl-4 pr-2 text-right group-hover:block">
          <button
            className="text-xl hover:underline"
            onClick={() => {
              setShowMenu(!showMenu)
            }}
          >
            {user.name}
          </button>
          {showMenu && <DropdownMenu />}
        </div>
        <button
          id="quant-summary"
          className="h-12 w-12 rounded-full text-4xl font-light hover:border-2"
        >
          <Link to="/">{(quant / 1000).toFixed(0)}</Link>
        </button>
      </div>
    )
  )
}
