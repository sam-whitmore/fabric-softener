import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './LoginButton.tsx'
import LogoutButton from './LogoutButton.tsx'
import Profile from './Profile.tsx'

function App() {
  const { user } = useAuth0();

  return (
    <>
      <div className="app">
        <Profile />
        {user ? <LogoutButton /> : <LoginButton />}
      </div>
    </>
  )
}

export default App
