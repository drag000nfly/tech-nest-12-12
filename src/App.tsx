import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Reviews from './pages/Reviews'
import Resources from './pages/Resources'
import Guides from './pages/Guides'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/best" element={<Guides />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
