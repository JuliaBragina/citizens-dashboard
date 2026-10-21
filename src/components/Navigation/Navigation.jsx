import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <nav className="navigation" aria-label="Основная навигация">
      <NavLink className="navigation__link" to="/" end>
        Обзор
      </NavLink>

      <NavLink className="navigation__link" to="/citizens">
        Граждане
      </NavLink>
    </nav>
  )
}

export default Navigation
