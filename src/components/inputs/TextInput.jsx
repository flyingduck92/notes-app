const TextInput = ({ label, id, name, value, onChange, required = false }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold">
        {label}
      </label>
      <input type="text"
        className="w-full rounded-lg p-2 border"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  )
}

export default TextInput