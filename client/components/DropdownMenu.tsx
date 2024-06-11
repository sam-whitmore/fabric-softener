import LogoutButton from './LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'

export default function DropdownMenu() {
  const { user } = useAuth0()

  return (
    <div className="rounded shadow-lg">
      {user && <LogoutButton />}
    </div>
  )
}