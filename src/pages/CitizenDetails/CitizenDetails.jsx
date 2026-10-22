import { useEffect, useRef, useState } from 'react'
import { Link, useBlocker, useBeforeUnload, useParams, useSearchParams } from 'react-router-dom'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import DataTable from '../../components/DataTable/DataTable'
import { sections, formatDate } from '../../components/CitizenSections/sections'
import FormField from '../../components/FormField/FormField'
import { mainFields, prepareCitizen, validateCitizen } from '../../utils/citizenForm'
import './CitizenDetails.css'

const statusLabels = { active: 'На учёте', archived: 'В архиве' }

function CitizenDetails({ citizens, onSave }) {
  const { id } = useParams()
  const citizen = citizens.find((item) => item.id === id)
  if (!citizen) return (
    <section className="stack">
      <Breadcrumbs items={[{ label: 'Граждане', to: '/citizens' }, { label: 'Гражданин не найден' }]} />
      <h1 className="title title--large">Гражданин не найден</h1>
    </section>
  )
  return <CitizenEditor key={id} citizen={citizen} onSave={onSave} />
}

function CitizenEditor({ citizen: savedCitizen, onSave }) {
  const [params, setParams] = useSearchParams()
  const [draft, setDraft] = useState(null)
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')
  const formRef = useRef(null)
  const editButtonRef = useRef(null)
  const focusErrorRef = useRef(null)
  const wasEditingRef = useRef(false)
  const citizen = draft || savedCitizen
  const editing = draft !== null
  const dirty = editing && JSON.stringify(draft) !== JSON.stringify(savedCitizen)
  const blocker = useBlocker(({ currentLocation, nextLocation }) => dirty && currentLocation.pathname !== nextLocation.pathname)

  useBeforeUnload((event) => {
    if (dirty) {
      event.preventDefault()
      event.returnValue = ''
    }
  })

  useEffect(() => {
    if (blocker.state === 'blocked') {
      if (window.confirm('Есть несохранённые изменения. Покинуть карточку и отменить их?')) blocker.proceed()
      else blocker.reset()
    }
  }, [blocker])

  useEffect(() => {
    if (focusErrorRef.current) {
      document.getElementById(focusErrorRef.current)?.focus()
      focusErrorRef.current = null
    }
  }, [errors, params])

  useEffect(() => {
    if (editing) formRef.current?.querySelector('input, select')?.focus()
    else if (wasEditingRef.current) editButtonRef.current?.focus()
    wasEditingRef.current = editing
  }, [editing])

  function beginEditing() {
    setDraft(structuredClone(savedCitizen))
    setErrors({})
    setMessage('')
  }

  function cancelEditing() {
    setDraft(null)
    setErrors({})
    setMessage('Изменения отменены.')
  }

  function save(event) {
    event.preventDefault()
    if (!draft) return
    const updated = prepareCitizen(draft)
    const nextErrors = validateCitizen(updated)
    setErrors(nextErrors)
    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      const next = new URLSearchParams(params)
      next.set('section', firstError.split('-')[0])
      focusErrorRef.current = firstError
      setParams(next, { replace: true })
      setMessage('Проверьте отмеченные поля.')
      return
    }
    onSave(updated)
    setDraft(null)
    setMessage('Изменения сохранены.')
  }

  function updateField(key, value) {
    setDraft((current) => ({ ...current, [key]: value }))
  }

  function updateRecord(dataKey, rowId, key, value) {
    setDraft((current) => ({
      ...current,
      [dataKey]: current[dataKey].map((row) => row.id === rowId ? { ...row, [key]: value } : row),
    }))
  }

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
            <div className="citizen-details__actions">
              {editing ? (
                <>
                  <button key="save" className="button" type="submit" form="citizen-form">Сохранить</button>
                  <button key="cancel" className="button citizen-details__cancel" type="button" onClick={cancelEditing}>Отменить</button>
                </>
              ) : (
                <button key="edit" className="button" type="button" ref={editButtonRef} onClick={beginEditing}>Редактировать</button>
              )}
            </div>
            <p className="text" role="status">{message}</p>
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

          <form id="citizen-form" ref={formRef} onSubmit={save} noValidate>
            {activeSection.id === 'main' ? (
              <div className="citizen-details">
                <section className="citizen-details__sections">
                  <h2 className="title title--small">Основные сведения</h2>
                  {editing ? (
                    <div className="citizen-details__list">
                      {mainFields.filter((field) => field.key !== 'email').map((field) => (
                        <FormField key={field.key} field={field} id={`main-${field.key}`} value={draft[field.key]} error={errors[`main-${field.key}`]} onChange={(value) => updateField(field.key, value)} />
                      ))}
                    </div>
                  ) : <dl className="citizen-details__list">
                    {fields.map(([label, value]) => (
                      <div className="citizen-details__field" key={label}>
                        <dt className="citizen-details__label">{label}</dt>
                        <dd className="citizen-details__value">{value || 'Не указано'}</dd>
                      </div>
                    ))}
                  </dl>}
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
                        {editing ? <FormField field={mainFields.find((field) => field.key === 'email')} id="main-email" value={draft.email} error={errors['main-email']} onChange={(value) => updateField('email', value)} /> : citizen.email ? <a className="link" href={`mailto:${citizen.email}`}>{citizen.email}</a> : 'Не указано'}
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
                  columns={editing ? activeSection.columns.map((column) => ({
                    ...column,
                    render: (value, row) => (
                      <FormField
                        field={column}
                        label={`${column.label} — запись ${citizen[activeSection.dataKey].findIndex((item) => item.id === row.id) + 1}`}
                        id={`${activeSection.id}-${row.id}-${column.key}`}
                        value={value}
                        error={errors[`${activeSection.id}-${row.id}-${column.key}`]}
                        onChange={(nextValue) => updateRecord(activeSection.dataKey, row.id, column.key, nextValue)}
                      />
                    ),
                  })) : activeSection.columns}
                  rows={citizen[activeSection.dataKey] || []}
                />
              </section>
            )}
          </form>
        </>
      ) : <h1 className="title title--large">Гражданин не найден</h1>}
    </section>
  )
}

export default CitizenDetails
