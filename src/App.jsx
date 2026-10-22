import { useState } from 'react'
import { citizens as initialCitizens } from './data/citizens'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './pages/Dashboard/Dashboard'
import Citizens from './pages/Citizens/Citizens'
import CitizenDetails from './pages/CitizenDetails/CitizenDetails'
import './App.css'

function App() {
  const [citizens, setCitizens] = useState(initialCitizens)

  function saveCitizen(updated) {
    setCitizens((current) => current.map((citizen) => citizen.id === updated.id ? updated : citizen))
  }

  return (
    <div className="app">
      <a className="skip-link" href="#main-content">
        Перейти к содержимому
      </a>
      <Sidebar />

      <main className="app__main" id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Dashboard citizens={citizens} />} />
          <Route path="/citizens" element={<Citizens citizens={citizens} />} />
          <Route path="/citizens/:id" element={<CitizenDetails citizens={citizens} onSave={saveCitizen} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
