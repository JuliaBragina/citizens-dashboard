import { Link } from 'react-router-dom'
import BarChart from '../../components/BarChart/BarChart'
import { getDashboardStats } from '../../utils/dashboardStats'
import './Dashboard.css'

const percentage = new Intl.NumberFormat('ru-RU', { style: 'percent', maximumFractionDigits: 0 })

function Dashboard({ citizens }) {
  const stats = getDashboardStats(citizens)
  const [active, archived] = stats.statuses
  const activeAngle = stats.total ? active.value / stats.total * 360 : 0
  const archivedAngle = stats.total ? (active.value + archived.value) / stats.total * 360 : 0
  const metrics = [
    { label: 'Всего граждан', value: stats.total, to: '/citizens', description: 'Все записи картотеки' },
    { label: 'На учёте', value: active.value, to: '/citizens?status=active', description: 'Активные записи' },
    { label: 'В архиве', value: archived.value, to: '/citizens?status=archived', description: 'Архивные записи' },
    { label: 'Регионов', value: stats.regionCount, description: 'Указано в карточках' },
  ]

  return (
    <section className="dashboard stack">
      <header className="dashboard__header">
        <div className="dashboard__intro">
          <h1 className="title title--large">Обзор</h1>
          <p className="text">Основные показатели картотеки граждан</p>
        </div>
      </header>

      <div className="dashboard__metrics">
        {metrics.map((metric) => (
          <section className="dashboard__metric" key={metric.label}>
            <h2 className="dashboard__metric-label">{metric.label}</h2>
            <p className="dashboard__metric-value">{metric.value}</p>
            {metric.to ? <Link className="link" to={metric.to}>{metric.description}</Link> : <p className="text">{metric.description}</p>}
          </section>
        ))}
      </div>

      {stats.total ? (
        <div className="dashboard__charts">
          <section className="dashboard__panel">
            <h2 className="title title--small">Статусы граждан</h2>
            <p className="text">Доля записей в каждом статусе</p>
            <div className="dashboard__status-chart">
              <div
                className="dashboard__donut"
                aria-hidden="true"
                style={{ '--active-angle': `${activeAngle}deg`, '--archived-angle': `${archivedAngle}deg` }}
              >
                <div className="dashboard__donut-center">
                  <span className="dashboard__donut-value">{stats.total}</span>
                  <span className="text">всего</span>
                </div>
              </div>
              <ul className="dashboard__legend">
                {stats.statuses.filter((item) => item.key !== 'unknown' || item.value).map((item) => (
                  <li className="dashboard__legend-item" key={item.key}>
                    <span className={`dashboard__legend-marker dashboard__legend-marker--${item.key}`} aria-hidden="true" />
                    <span>{item.label}</span>
                    <span className="dashboard__legend-value">{item.value} · {percentage.format(item.value / stats.total)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="dashboard__panel">
            <h2 className="title title--small">Граждане по регионам</h2>
            <p className="text">Количество записей в каждом регионе</p>
            <BarChart items={stats.regions} />
          </section>

          <section className="dashboard__panel dashboard__panel--wide">
            <h2 className="title title--small">Возрастные группы</h2>
            <p className="text">Возраст рассчитан на текущую дату</p>
            <BarChart items={stats.ages} />
          </section>
        </div>
      ) : <p className="text">Пока нет граждан для построения графиков.</p>}
    </section>
  )
}

export default Dashboard
