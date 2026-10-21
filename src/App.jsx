import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './pages/Dashboard/Dashboard'
import Citizens from './pages/Citizens/Citizens'
import CitizenDetails from './pages/CitizenDetails/CitizenDetails'
import './App.css'

function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#main-content">
        Перейти к содержимому
      </a>
      <Sidebar />

      <main className="app__main" id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/citizens" element={<Citizens />} />
          <Route path="/citizens/:id" element={<CitizenDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
