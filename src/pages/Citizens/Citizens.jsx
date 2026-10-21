import DataTable from '../../components/DataTable/DataTable'
import { formatDate } from '../../components/CitizenSections/sections'
import { citizens } from '../../data/citizens'
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

function Citizens() {
  return (
    <section className="stack">
      <header>
        <h1 className="title title--large">Граждане</h1>
        <p className="text">Всего записей: {citizens.length}</p>
      </header>

      <DataTable
        caption="Картотека граждан"
        columns={columns}
        rows={citizens}
        getRowLink={(citizen) => `/citizens/${citizen.id}`}
      />
    </section>
  )
}

export default Citizens
