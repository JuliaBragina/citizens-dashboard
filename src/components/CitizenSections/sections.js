const dateFormatter = new Intl.DateTimeFormat('ru-RU', { timeZone: 'UTC' })
export const formatDate = (value) => value ? dateFormatter.format(new Date(value)) : 'Не указано'

// Описание разделов и полей связанных записей.
export const sections = [
  { id: 'main', label: 'Основные сведения' },
  {
    id: 'family', dataKey: 'family', label: 'Семья',
    columns: [
      { key: 'fullName', label: 'ФИО' },
      { key: 'relationship', label: 'Степень родства' },
      { key: 'birthDate', label: 'Дата рождения', format: formatDate },
    ],
  },
  {
    id: 'education', dataKey: 'educationRecords', label: 'Образование',
    columns: [
      { key: 'institution', label: 'Учебное заведение' },
      { key: 'level', label: 'Уровень' },
      { key: 'specialty', label: 'Специальность' },
      { key: 'startYear', label: 'Год поступления' },
      { key: 'endYear', label: 'Год окончания' },
    ],
  },
  {
    id: 'work', dataKey: 'work', label: 'Работа',
    columns: [
      { key: 'employer', label: 'Организация' },
      { key: 'occupation', label: 'Должность' },
      { key: 'department', label: 'Подразделение' },
      { key: 'workFormat', label: 'Формат' },
      { key: 'startDate', label: 'Начало работы', format: formatDate },
      { key: 'endDate', label: 'Окончание работы', format: (value) => value === null ? 'По настоящее время' : formatDate(value) },
    ],
  },
]
