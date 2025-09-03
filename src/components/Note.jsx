const Note = ({ note, deleteNote }) => {

  const style = priority => {
    switch (priority) {
      case "High":
        return 'border-red-500'
      case "Medium":
        return 'border-amber-300'
      case "Low":
        return 'border-green-600'
    }
  }
  let priorityStyle = style(note.priority)

  return <div className={`p-4 bg-white rounded-lg shadow-md border-l-4 ${priorityStyle}`}>
    <h3 className='text-lg font-bold'>{note.title}</h3>
    <p className="text-sm text-gray-600">
      <strong>Category:</strong> {note.category}
    </p>
    <p className="text-sm text-gray-600">
      <strong>Priority:</strong> {note.priority}
    </p>
    <p className="mt-2">
      {note.description}
    </p>

    <button onClick={() => deleteNote(note.id)}
      className="mt-3 text-red-500 cursor-pointer transition hover:text-red-700">
      🗑 Delete
    </button>
  </div>
}

export default Note