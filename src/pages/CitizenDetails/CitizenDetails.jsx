import { Link, useParams, useSearchParams } from 'react-router-dom'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import DataTable from '../../components/DataTable/DataTable'
import { sections, formatDate } from '../../components/CitizenSections/sections'
import { citizens } from '../../data/citizens'
import './CitizenDetails.css'

const statusLabels = { active: 'На учёте', archived: 'В архиве' }

function CitizenDetails() {
  const { id } = useParams()
  const [params] = useSearchParams()
  const citizen = citizens.find((item) => item.id === id)
  const activeSection = sections.find((section) => section.id === params.get('section')) || sections[0]

  function sectionUrl(section) {
    const next = new URLSearchParams(params)
    next.set('section', section)
    return `?${next}`
  }

  const fields = citizen ? [
    ['Статус', statusLabels[citizen.status]],
    ['Дата рождения', formatDate(citizen.birthDate)],
    ['Пол', citizen.gender],
    ['Гражданство', citizen.citizenship],
    ['Регион', citizen.region],
    ['Семейное положение', citizen.maritalStatus],
  ] : []

  return (
    <section className="stack">
      <Breadcrumbs items={[
        { label: 'Граждане', to: '/citizens' },
        { label: citizen?.fullName || 'Гражданин не найден' },
      ]} />

      {citizen ? (
        <>
          <header className="citizen-details__header">
            <h1 className="title title--large">{citizen.fullName}</h1>
          </header>

          <nav className="citizen-details__tabs" aria-label="Разделы карточки">
            {sections.map((section) => (
              <Link
                className="citizen-details__tab"
                key={section.id}
                to={sectionUrl(section.id)}
                aria-current={activeSection.id === section.id ? 'page' : undefined}
              >
                {section.label}
              </Link>
            ))}
          </nav>

          {activeSection.id === 'main' ? (
            <div className="citizen-details">
              <section className="citizen-details__sections">
                <h2 className="title title--small">Основные сведения</h2>
                <dl className="citizen-details__list">
                  {fields.map(([label, value]) => (
                    <div className="citizen-details__field" key={label}>
                      <dt className="citizen-details__label">{label}</dt>
                      <dd className="citizen-details__value">{value || 'Не указано'}</dd>
                    </div>
                  ))}
                </dl>
              </section>
              <section className="citizen-details__contacts">
                <div className="citizen-details__avatar" aria-hidden="true">
                  {citizen.fullName.split(' ').slice(0, 2).map((part) => part[0]).join('')}
                </div>
                <h2 className="title title--small">Контакты</h2>
                <dl className="citizen-details__list">
                  <div className="citizen-details__contact">
                    <dt className="citizen-details__label">Электронная почта</dt>
                    <dd className="citizen-details__value">
                      {citizen.email ? <a className="link" href={`mailto:${citizen.email}`}>{citizen.email}</a> : 'Не указано'}
                    </dd>
                  </div>
                </dl>
              </section>
            </div>
          ) : (
            <section className="citizen-details__related" aria-label={activeSection.label}>
              <h2 className="title title--small">{activeSection.label}</h2>
              <p className="text">Всего записей: {(citizen[activeSection.dataKey] || []).length}</p>
              <DataTable
                caption={activeSection.label}
                columns={activeSection.columns}
                rows={citizen[activeSection.dataKey] || []}
              />
            </section>
          )}
        </>
      ) : <h1 className="title title--large">Гражданин не найден</h1>}
    </section>
  )
}

export default CitizenDetails
