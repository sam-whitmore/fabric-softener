import Nav from './Nav.tsx'
import DetailedProfileView from './DetailedProfileView.tsx'
import Survey from './Survey.tsx'

function App() {
  return (
    <>
      <div className="app">
        <Nav />
        <DetailedProfileView />
      </div>
      <Survey />
    </>
  )
}

export default App
