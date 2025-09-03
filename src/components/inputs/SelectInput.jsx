const SelectInput = ({ label, id, name, value, onChange, options, required }) => {
  return (
    <div className="mb-4 relative">
      <label htmlFor={name} className="block font-semibold">
        {label}
      </label>
      <select type="text"
        className="w-full border rounded-lg p-2 appearance-none"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      >
        {
          options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))
        }
      </select>
      {/* Custom arrow */}
      <div className="pointer-events-none absolute right-2 top-8 text-gray-500">
        ▼
      </div>
    </div>
  )
}

export default SelectInput