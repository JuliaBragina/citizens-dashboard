import { Link } from 'react-router-dom'
import './DataTable.css'

function DataTable({ columns, rows, caption, getRowLink }) {
  if (!rows.length) return <p className="text">Записей пока нет.</p>

  function renderCell(column, row) {
    const value = row[column.key]
    if (column.render) return column.render(value, row)
    if (column.format) return column.format(value)
    return value ?? 'Не указано'
  }

  return (
    <div className="data-table" role="region" aria-label={caption} tabIndex={0}>
      <table className="data-table__table">
        <caption className="data-table__caption">{caption}</caption>
        <thead>
          <tr>
            {columns.map((column) => (
              <th className="data-table__heading" scope="col" key={column.key}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const rowLink = getRowLink?.(row)

            return (
              <tr className={`data-table__row${rowLink ? ' data-table__row--linked' : ''}`} key={row.id}>
                {columns.map((column, index) => (
                  <td
                    className={`data-table__cell${rowLink && index === 0 ? ' data-table__cell--link' : ''}`}
                    key={column.key}
                  >
                    {rowLink && index === 0 ? (
                      <Link className="data-table__link" to={rowLink}>
                        {renderCell(column, row)}
                      </Link>
                    ) : renderCell(column, row)}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
