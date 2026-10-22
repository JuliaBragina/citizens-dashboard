import './FormField.css'

function FormField({ field, value, onChange, id, error, label = field.label }) {
  const props = {
    id,
    name: id,
    className: 'form-field__control',
    value: value ?? '',
    onChange: (event) => onChange(event.target.value),
    required: field.required,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? `${id}-error` : undefined,
  }

  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={id}>{label}{field.required ? ' *' : ''}</label>
      {field.options ? (
        <select {...props}>
          <option value="">Не указано</option>
          {field.options.map((option) => (
            <option key={option.value ?? option} value={option.value ?? option}>{option.label ?? option}</option>
          ))}
        </select>
      ) : (
        <input {...props} type={field.type || 'text'} autoComplete={field.autoComplete || 'off'} />
      )}
      {error && <span className="form-field__error" id={`${id}-error`}>{error}</span>}
    </div>
  )
}

export default FormField
