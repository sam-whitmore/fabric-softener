import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './LoginButton.tsx'
import LogoutButton from './LogoutButton.tsx'
import UserProfileSummary from './UserProfileSummary.tsx';

export default function Nav() {
  const { user } = useAuth0();

  return (
    <div className="relative flex w-screen border-4 border-slate-200">
      {user ? <LogoutButton /> : <LoginButton />}
      <UserProfileSummary />
    </div>
  )
}