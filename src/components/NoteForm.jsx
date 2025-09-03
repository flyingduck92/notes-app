import { useState } from 'react'

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: '',
    priority: 'Medium',
    category: 'Work',
    description: ''
  })


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // validation
    if (!formData.title || !formData.description) return

    // create note object
    const newNote = {
      id: crypto.randomUUID(),
      ...formData
    }

    // Add note
    setNotes([newNote, ...notes])

    // reset formData
    setFormData({
      title: '',
      priority: 'Medium',
      category: 'Work',
      description: ''
    })
  }

  return (
    <form onSubmit={handleSubmit} className='mb-6'>
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Title
        </label>
        <input type="text"
          className="w-full rounded-lg p-2 border"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 relative">
        <label htmlFor="priority" className="block font-semibold">
          Priority
        </label>
        <select type="text"
          className="w-full border rounded-lg p-2 appearance-none"
          id="priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="High">🔴 High</option>
          <option value="Medium">🟡 Medium</option>
          <option value="Low">🟢 Low</option>
        </select>
        {/* Custom arrow */}
        <div className="pointer-events-none absolute right-2 top-8 text-gray-500">
          ▼
        </div>
      </div>
      <div className="mb-4 relative">
        <label htmlFor="category" className="block font-semibold">
          Category
        </label>
        <select type="text"
          className="w-full border rounded-lg p-2 appearance-none"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Work">🏢 Work</option>
          <option value="Personal">🏠 Personal</option>
          <option value="Ideas">💡 Ideas</option>
        </select>
        {/* Custom arrow */}
        <div className="pointer-events-none absolute right-2 top-8 text-gray-500">
          ▼
        </div>
      </div>
      <div className="mb-4 relative">
        <label htmlFor="description" className="block font-semibold">
          Description
        </label>
        <textarea type="text"
          className="w-full rounded-lg p-2 border"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        >
        </textarea>
      </div>
      <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">
        Submit
      </button>
    </form >
  )
}

export default NoteForm