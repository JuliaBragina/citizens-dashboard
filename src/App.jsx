import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Citizens from './pages/Citizens'
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
        </Routes>
      </main>
    </div>
  )
}

export default App
