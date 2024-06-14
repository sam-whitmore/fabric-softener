/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Survey from './components/Survey'
import Home from './components/Home'
import App from './components/App'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Survey />} />
      <Route path="home" element={<Home />}>
      </Route>
    </Route>
  )
)

export default router
