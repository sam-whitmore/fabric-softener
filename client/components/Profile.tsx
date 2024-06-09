import { useAuth0 } from '@auth0/auth0-react'
import UserData from './UserData'
// import useLocation from '../hooks/useLocation'

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0()

  // REQUESTS LOCATION DATA (REQUIRES HTTPS)
    // const location = useLocation()

  // useAuth0 hook
  if (isLoading) return <div>Loading Profile...</div>
  if (!user) return <div>No User Profile to Display</div>

  // REQUESTS LOCATION DATA (REQUIRES HTTPS)
    // if (isAuthenticated) {
    //   location.getCurrent()
    // }

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
