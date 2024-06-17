import { useState } from 'react'

export default function Features() {
  const [showFeatures, setShowFeatures] = useState(false)

  return (
    <div className="group my-4 ml-4 mr-auto flex items-center rounded-full bg-slate-50 p-2 shadow-lg">
      <button
        className="px-4 text-xl hover:underline"
        onClick={() => setShowFeatures(!showFeatures)}
      >
        are
      </button>
    </div>
  )
}
