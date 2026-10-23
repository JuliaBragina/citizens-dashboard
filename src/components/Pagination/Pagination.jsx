import { Link, useSearchParams } from 'react-router-dom'
import './Pagination.css'

function Pagination({ page, pageCount }) {
  const [params] = useSearchParams()
  if (pageCount <= 1) return null

  function pageUrl(value) {
    const next = new URLSearchParams(params)
    next.set('page', value)
    return `?${next}`
  }

  const first = Math.max(1, Math.min(page - 2, pageCount - 4))
  const pages = Array.from({ length: Math.min(5, pageCount) }, (_, index) => first + index)

  return (
    <nav className="pagination" aria-label="Страницы картотеки">
      {page > 1 ? <Link className="pagination__link" to={pageUrl(page - 1)}>Назад</Link> : <span className="pagination__disabled">Назад</span>}
      {pages.map((number) => (
        <Link className="pagination__link" key={number} to={pageUrl(number)} aria-label={`Страница ${number}`} aria-current={number === page ? 'page' : undefined}>{number}</Link>
      ))}
      {page < pageCount ? <Link className="pagination__link" to={pageUrl(page + 1)}>Далее</Link> : <span className="pagination__disabled">Далее</span>}
      <span className="text">Страница {page} из {pageCount}</span>
    </nav>
  )
}

export default Pagination
