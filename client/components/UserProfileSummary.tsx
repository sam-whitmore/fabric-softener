import { useAuth0 } from '@auth0/auth0-react'

export default function UserProfileSummary() {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) return <div>Loading Profile...</div>
  if (!user) return <div>No User Profile to Display</div>

  return (
    isAuthenticated && (
      <div className="flex ml-auto items-center border-4 border-orange-300">
        <div className="text-right">
          <strong>{user.name}</strong>
          <p>Welcome back!</p>
        </div>
        <img src={user.picture} alt={user.name} className="rounded-full w-fit h-fit p-4" />
      </div>
    )
  )
}
