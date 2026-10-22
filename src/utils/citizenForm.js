import { sections } from '../components/CitizenSections/sections.js'

export const mainFields = [
  { key: 'fullName', label: 'ФИО', required: true, autoComplete: 'name' },
  { key: 'status', label: 'Статус', required: true, options: [{ value: 'active', label: 'На учёте' }, { value: 'archived', label: 'В архиве' }] },
  { key: 'birthDate', label: 'Дата рождения', type: 'date', required: true },
  { key: 'gender', label: 'Пол', options: ['Женский', 'Мужской'] },
  { key: 'citizenship', label: 'Гражданство' },
  { key: 'region', label: 'Регион', required: true },
  { key: 'maritalStatus', label: 'Семейное положение', options: ['Замужем', 'Женат', 'Не замужем', 'Не женат', 'В разводе', 'Вдова', 'Вдовец'] },
  { key: 'email', label: 'Электронная почта', type: 'email', autoComplete: 'email' },
]

export function prepareCitizen(draft) {
  const result = structuredClone(draft)
  for (const field of mainFields) {
    if (typeof result[field.key] === 'string') result[field.key] = result[field.key].trim()
  }
  for (const section of sections.filter((item) => item.dataKey)) {
    result[section.dataKey] = result[section.dataKey].map((row) => {
      const record = { ...row }
      for (const column of section.columns) {
        const value = record[column.key]
        if (typeof value === 'string') record[column.key] = value.trim()
        if (column.type === 'number' && value !== '' && value != null) record[column.key] = Number(value)
      }
      return record
    })
  }
  return result
}

export function validateCitizen(citizen) {
  const errors = {}
  const today = new Date()
  const todayString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`

  function check(field, value, path) {
    const empty = value == null || String(value).trim() === ''
    if (empty) {
      if (field.required) errors[path] = 'Заполните поле.'
      return
    }
    if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errors[path] = 'Введите email в формате name@example.com.'
    if (field.type === 'number' && (!Number.isInteger(Number(value)) || Number(value) < 1900 || Number(value) > 2100)) errors[path] = 'Введите год от 1900 до 2100.'
    if (field.type === 'date') {
      const date = new Date(value)
      if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) errors[path] = 'Введите корректную дату.'
      else if (field.key === 'birthDate' && value > todayString) errors[path] = 'Дата рождения не может быть в будущем.'
    }
  }

  mainFields.forEach((field) => check(field, citizen[field.key], `main-${field.key}`))
  for (const section of sections.filter((item) => item.dataKey)) {
    for (const row of citizen[section.dataKey]) {
      section.columns.forEach((field) => check(field, row[field.key], `${section.id}-${row.id}-${field.key}`))
      const start = section.id === 'education' ? 'startYear' : 'startDate'
      const end = section.id === 'education' ? 'endYear' : 'endDate'
      if (row[start] && row[end] && row[end] < row[start]) errors[`${section.id}-${row.id}-${end}`] = 'Окончание не может быть раньше начала.'
    }
  }
  return errors
}
