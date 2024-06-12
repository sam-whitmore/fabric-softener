import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import DropdownMenu from './DropdownMenu'
import LoginButton from './LoginButton'
// import useResponses from '../hooks/useResponses'

export default function UserProfileSummary() {
  const [latest, setLatest] = useState(5)
  const [showMenu, setShowMenu] = useState(false)
  const { user, isAuthenticated, isLoading } = useAuth0()
  

  if (isLoading) return <div>Loading Profile...</div>
  if (!user) return (
    <div className="ml-auto flex items-center border-4 border-red-600">
      <LoginButton />
    </div>
  )

  console.log(latest)

  return (
    isAuthenticated && (
      <div className="ml-auto flex items-center border-4 border-orange-300">
        <div className="text-right">
          <strong>{user.name}</strong>
          <p>Welcome back!</p>
        </div>
        <img
          src={user.picture}
          alt={user.name}
          className="h-12 w-12 rounded-full m-4"
        />
        <button
          className="h-12 w-12 rounded-full m-4 bg-orange-300 hover:bg-orange-400"
          onClick={() => {
            setShowMenu(!showMenu)
          }}
        >
          v
        </button>
        {showMenu && (
          <DropdownMenu />
        )}
      </div>
    )
  )
}
