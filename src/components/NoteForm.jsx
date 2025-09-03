import { useState } from 'react'
import TextInput from './inputs/TextInput'
import SelectInput from './inputs/SelectInput'
import TextAreaInput from './inputs/TextAreaInput'

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: '',
    priority: 'Medium',
    category: 'Work',
    description: ''
  })

  const [isFormVisible, setIsFormVisible] = useState(false)

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
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition-all mb-4">
        {isFormVisible ? 'Hide Form ✖' : 'Add New Note ➕'}
      </button>

      {/* Form */}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className='mb-6'>
          <TextInput
            label="Title"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <SelectInput
            label="Priority"
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: "High", label: "🔴 High" },
              { value: "Medium", label: "🟡 Medium" },
              { value: "Low", label: "🟢 Low" },
            ]}
          />

          <SelectInput
            label="Category"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: "Work", label: "🏢 Work" },
              { value: "Personal", label: "🏠 Personal" },
              { value: "Ideas", label: "💡 Ideas" },
            ]}
          />

          <TextAreaInput
            label="Description"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">
            Submit
          </button>
        </form>
      )}
    </>
  )
}

export default NoteForm