import { useState } from 'react'

const NoteForm = () => {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [category, setCategory] = useState('Work')
  const [description, setDescription] = useState('')

  return (
    <form className='mb-6'>
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Title
        </label>
        <input type="text"
          className="w-full rounded-lg p-2 border"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
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
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}>
        </textarea>
      </div>
      <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">
        Submit
      </button>
    </form >
  )
}

export default NoteForm