import { useAuth0 } from '@auth0/auth0-react'
import UserData from './UserData'

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) return <div>Loading Profile...</div>
  if (!user) return <div>No User Profile to Display</div>

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <div>
          <UserData />
        </div>
      </div>
    )
  )
}
