import './BarChart.css'

function BarChart({ items }) {
  const maximum = Math.max(1, ...items.map((item) => item.value))

  return (
    <ul className="bar-chart">
      {items.map((item) => (
        <li className="bar-chart__item" key={item.label}>
          <div className="bar-chart__description">
            <span className="bar-chart__label">{item.label}</span>
            <span className="bar-chart__value">{item.value}</span>
          </div>
          <div className="bar-chart__track" aria-hidden="true">
            <div className="bar-chart__bar" style={{ width: `${item.value / maximum * 100}%` }} />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default BarChart
