import Navigation from '../Navigation/Navigation'
import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar stack">
      <h2 className="title title--small sidebar__brand">
        Картотека граждан
      </h2>

      <Navigation />
    </aside>
  )
}

export default Sidebar
