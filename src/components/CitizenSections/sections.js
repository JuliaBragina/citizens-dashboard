const dateFormatter = new Intl.DateTimeFormat('ru-RU', { timeZone: 'UTC' })
export const formatDate = (value) => value ? dateFormatter.format(new Date(value)) : 'Не указано'

// Описание разделов и полей связанных записей.
export const sections = [
  { id: 'main', label: 'Основные сведения' },
  {
    id: 'family', dataKey: 'family', label: 'Семья',
    columns: [
      { key: 'fullName', label: 'ФИО', required: true },
      { key: 'relationship', label: 'Степень родства', options: ['Супруг', 'Супруга', 'Сын', 'Дочь', 'Мать', 'Отец', 'Брат', 'Сестра', 'Другое'] },
      { key: 'birthDate', label: 'Дата рождения', type: 'date', format: formatDate },
    ],
  },
  {
    id: 'education', dataKey: 'educationRecords', label: 'Образование',
    columns: [
      { key: 'institution', label: 'Учебное заведение', required: true },
      { key: 'level', label: 'Уровень', options: ['Среднее', 'Среднее профессиональное', 'Высшее', 'Дополнительное'] },
      { key: 'specialty', label: 'Специальность' },
      { key: 'startYear', type: 'number', label: 'Год поступления' },
      { key: 'endYear', type: 'number', label: 'Год окончания' },
    ],
  },
  {
    id: 'work', dataKey: 'work', label: 'Работа',
    columns: [
      { key: 'employer', label: 'Организация', required: true },
      { key: 'occupation', label: 'Должность' },
      { key: 'department', label: 'Подразделение' },
      { key: 'workFormat', label: 'Формат', options: ['Офис', 'Удалённый', 'Гибридный'] },
      { key: 'startDate', type: 'date', label: 'Начало работы', format: formatDate },
      { key: 'endDate', type: 'date', label: 'Окончание работы', format: (value) => value === null ? 'По настоящее время' : formatDate(value) },
    ],
  },
]
