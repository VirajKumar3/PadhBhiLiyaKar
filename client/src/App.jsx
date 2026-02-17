import { useState, useEffect } from 'react'
import axios from 'axios'
import AddPassword from './components/AddPassword'
import PasswordsList from './components/PasswordsList'

function App() {
  const [passwords, setPasswords] = useState([])
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')

  const API_URL = '/api'

  // Fetch all passwords
  const fetchPasswords = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${API_URL}/`)
      setPasswords(response.data)
    } catch (error) {
      console.error('Error fetching passwords:', error)
      setMessage('Error fetching passwords')
    } finally {
      setLoading(false)
    }
  }

  // Add new password
  const handleAddPassword = async (passwordData) => {
    try {
      await axios.post(`${API_URL}/`, passwordData)
      setMessage('Password added successfully!')
      fetchPasswords()
      setTimeout(() => setMessage(''), 3000)
    } catch (error) {
      console.error('Error adding password:', error)
      setMessage('Error adding password')
      setTimeout(() => setMessage(''), 3000)
    }
  }

  useEffect(() => {
    fetchPasswords()
  }, [])

  return (
    <div className="container">
      <div className="header">
        <h1>🔐 Password Manager</h1>
        <p>Securely manage your passwords</p>
      </div>

      {message && (
        <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>
          {message}
        </div>
      )}

      <div className="main-content">
        <div className="card">
          <AddPassword onAddPassword={handleAddPassword} />
        </div>

        <div className="card">
          {loading ? (
            <div className="loading">Loading passwords...</div>
          ) : (
            <PasswordsList passwords={passwords} />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
