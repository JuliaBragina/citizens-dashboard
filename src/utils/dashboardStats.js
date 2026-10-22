export function getAge(birthDate, today = new Date()) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(birthDate || '')) return null
  const date = new Date(`${birthDate}T00:00:00Z`)
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== birthDate) return null
  let age = today.getFullYear() - date.getUTCFullYear()
  const month = today.getMonth() - date.getUTCMonth()
  if (month < 0 || (month === 0 && today.getDate() < date.getUTCDate())) age -= 1
  return age >= 0 ? age : null
}

export function getDashboardStats(citizens, today = new Date()) {
  const regionCounts = new Map()
  const ages = [
    { label: 'До 18 лет', value: 0 },
    { label: '18–35 лет', value: 0 },
    { label: '36–59 лет', value: 0 },
    { label: '60 лет и старше', value: 0 },
    { label: 'Возраст не указан', value: 0 },
  ]
  const statuses = [
    { label: 'На учёте', key: 'active', value: 0 },
    { label: 'В архиве', key: 'archived', value: 0 },
    { label: 'Статус не указан', key: 'unknown', value: 0 },
  ]

  for (const citizen of citizens) {
    const region = citizen.region || 'Регион не указан'
    regionCounts.set(region, (regionCounts.get(region) || 0) + 1)
    const status = statuses.find((item) => item.key === citizen.status) || statuses[2]
    status.value += 1
    const age = getAge(citizen.birthDate, today)
    const group = age === null ? 4 : age < 18 ? 0 : age <= 35 ? 1 : age <= 59 ? 2 : 3
    ages[group].value += 1
  }

  return {
    total: citizens.length,
    statuses,
    regions: [...regionCounts].map(([label, value]) => ({ label, value })),
    regionCount: new Set(citizens.map((citizen) => citizen.region).filter(Boolean)).size,
    ages: ages.filter((item, index) => index !== 4 || item.value > 0),
  }
}
