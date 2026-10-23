import Pagination from '../../components/Pagination/Pagination'
import { paginate } from '../../utils/pagination'
import { useSearchParams } from 'react-router-dom'
import DataTable from '../../components/DataTable/DataTable'
import { formatDate } from '../../components/CitizenSections/sections'
import './Citizens.css'

const statusLabels = { active: 'На учёте', archived: 'В архиве' }

const columns = [
  { key: 'fullName', label: 'ФИО' },
  { key: 'birthDate', label: 'Дата рождения', format: formatDate },
  { key: 'region', label: 'Регион' },
  {
    key: 'status',
    label: 'Статус',
    render: (status) => (
      <span className={`citizens-status citizens-status--${status}`}>
        {statusLabels[status] || 'Не указано'}
      </span>
    ),
  },
]

function Citizens({ citizens }) {
  const [params, setParams] = useSearchParams()
  const query = params.get('query') || ''
  const region = params.get('region') || ''
  const status = params.get('status') || ''
  const regions = [...new Set(citizens.map((citizen) => citizen.region))]
  const normalizedQuery = query.trim().toLocaleLowerCase('ru-RU').replaceAll('ё', 'е')
  const filteredCitizens = citizens.filter((citizen) => (
    citizen.fullName.toLocaleLowerCase('ru-RU').replaceAll('ё', 'е').includes(normalizedQuery)
    && (!region || citizen.region === region)
    && (!status || citizen.status === status)
  ))

  const pagination = paginate(filteredCitizens, params.get('page'))

  function updateFilter(key, value) {
    const next = new URLSearchParams(params)
    next.delete('page')
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  function resetFilters() {
    const next = new URLSearchParams(params)
    for (const key of ['query', 'region', 'status', 'page']) next.delete(key)
    setParams(next, { replace: true })
  }

  return (
    <section className="stack">
      <header>
        <h1 className="title title--large">Граждане</h1>
        <p className="text">Всего записей: {citizens.length}</p>
      </header>

      <form className="citizens-filters" role="search" aria-label="Поиск граждан" onSubmit={(event) => event.preventDefault()}>
        <div className="citizens-filters__field">
          <label className="citizens-filters__label" htmlFor="citizen-query">Поиск по ФИО</label>
          <input
            className="citizens-filters__control"
            id="citizen-query"
            name="query"
            type="search"
            autoComplete="off"
            placeholder="Например, Иванова…"
            value={query}
            onChange={(event) => updateFilter('query', event.target.value)}
          />
        </div>
        <div className="citizens-filters__field">
          <label className="citizens-filters__label" htmlFor="citizen-region">Регион</label>
          <select className="citizens-filters__control" id="citizen-region" name="region" value={region} onChange={(event) => updateFilter('region', event.target.value)}>
            <option value="">Все регионы</option>
            {region && !regions.includes(region) && <option value={region}>{region}</option>}
            {regions.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </div>
        <div className="citizens-filters__field">
          <label className="citizens-filters__label" htmlFor="citizen-status">Статус</label>
          <select className="citizens-filters__control" id="citizen-status" name="status" value={status} onChange={(event) => updateFilter('status', event.target.value)}>
            <option value="">Все статусы</option>
            {status && !Object.hasOwn(statusLabels, status) && <option value={status}>Неизвестный статус</option>}
            {Object.entries(statusLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </div>
        <button className="button" type="button" onClick={resetFilters} disabled={!query && !region && !status}>Сбросить</button>
      </form>

      <p className="text" role="status">Найдено: {filteredCitizens.length} из {citizens.length}. Показано: {pagination.from}–{pagination.to}</p>

      {filteredCitizens.length ? <DataTable
        caption="Картотека граждан"
        columns={columns}
        rows={pagination.rows}
        getRowLink={(citizen) => `/citizens/${citizen.id}`}
      /> : <p className="text">Граждане не найдены. Измените условия поиска или сбросьте фильтры.</p>}
      <Pagination page={pagination.page} pageCount={pagination.pageCount} />
    </section>
  )
}

export default Citizens
