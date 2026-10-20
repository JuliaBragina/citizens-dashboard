import './Sidebar.css'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="sidebar stack">
      <h2 className="title title--small sidebar__brand">
        Картотека граждан
      </h2>

      <nav className="sidebar__nav" aria-label="Основная навигация">
        <NavLink className="sidebar__link" to="/" end>
          Обзор
        </NavLink>

        <NavLink className="sidebar__link" to="/citizens">
          Граждане
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar
