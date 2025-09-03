const TextAreaInput = ({ label, id, name, value, onChange, required = false }) => {
  return (
    <div className="mb-4 relative">
      <label htmlFor={name} className="block font-semibold">
        {label}
      </label>
      <textarea type="text"
        className="w-full rounded-lg p-2 border"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      >
      </textarea>
    </div>
  )
}

export default TextAreaInput