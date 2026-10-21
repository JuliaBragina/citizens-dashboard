import { Link } from 'react-router-dom'
import './Breadcrumbs.css'

function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Хлебные крошки">
      <ol className="breadcrumbs__list">
        {items.map((item, index) => (
          <li className="breadcrumbs__item" key={item.to || item.label}>
            {index > 0 && (
              <span className="breadcrumbs__separator" aria-hidden="true">/</span>
            )}
            {index === items.length - 1 ? (
              <span className="breadcrumbs__current" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link className="link breadcrumbs__link" to={item.to}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
