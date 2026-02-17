import { useState } from 'react'

function AddPassword({ onAddPassword }) {
  const [formData, setFormData] = useState({
    siteURL: '',
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.siteURL || !formData.username || !formData.password) {
      alert('Please fill in all fields')
      return
    }

    await onAddPassword(formData)
    
    setFormData({
      siteURL: '',
      username: '',
      password: ''
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Password</h2>
      
      <div className="form-group">
        <label htmlFor="siteURL">Website URL</label>
        <input
          type="text"
          id="siteURL"
          name="siteURL"
          value={formData.siteURL}
          onChange={handleChange}
          placeholder="https://example.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="username">Username/Email</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="your@email.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
      </div>

      <button type="submit" className="btn">
        Add Password
      </button>
    </form>
  )
}

export default AddPassword
