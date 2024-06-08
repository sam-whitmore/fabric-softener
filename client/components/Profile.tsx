import { useAuth0 } from '@auth0/auth0-react'
import { useState, useEffect } from 'react'
// import UserData from './UserData'
// import useLocation from '../hooks/useLocation'
import useResponses from '../hooks/useResponses'

export default function Profile() {
  const [token, setToken] = useState('')
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0()
  const responses = useResponses()
  const { data, isPending, isError, error } = responses.allByUser(token)

  useEffect(
    () => {
      getAccessTokenSilently()
      .then((token) => {
        setToken(token)
      })
      .catch(error => console.error(error.message))
    },
    [getAccessTokenSilently]
  )

  // REQUESTS LOCATION DATA (REQUIRES HTTPS)
    // const location = useLocation()

  // useAuth0 hook
  if (isLoading) return <div>Loading Profile...</div>
  if (!user) return <div>No User Profile to Display</div>

  // useResponses hook
  if (isPending) return (<p>Fetching User Data...</p>)
  if (isError) {
    console.error(error)
    return ( 
      <p>Error: {error.message}</p>
    )
  }

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
          {/* <UserData user={user} /> */}
        </div>
      </div>
    )
  )
}
