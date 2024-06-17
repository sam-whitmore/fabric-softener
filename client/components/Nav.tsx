import Features from './Features.tsx'
import UserProfileSummary from './UserProfileSummary.tsx'

export default function Nav() {
  return (
    <div className="relative flex w-screen">
      <Features />
      <UserProfileSummary />
    </div>
  )
}
