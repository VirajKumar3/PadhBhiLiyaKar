import { useState } from 'react'

function PasswordsList({ passwords }) {
  const [visiblePasswords, setVisiblePasswords] = useState({})

  const togglePasswordVisibility = (id) => {
    setVisiblePasswords(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  if (passwords.length === 0) {
    return (
      <div>
        <h2>Saved Passwords</h2>
        <p style={{ color: '#999', marginTop: '20px', textAlign: 'center' }}>
          No passwords saved yet. Add one to get started!
        </p>
      </div>
    )
  }

  return (
    <div>
      <h2>Saved Passwords ({passwords.length})</h2>
      <div className="passwords-list">
        {passwords.map((item) => (
          <div key={item.id || item._id} className="password-item">
            <h3>🌐 {item.siteURL}</h3>
            <p>
              <strong>Username:</strong> {item.username}
            </p>
            <p>
              <strong>Password:</strong> 
              {' '}
              <span 
                onClick={() => togglePasswordVisibility(item.id || item._id)}
                style={{ cursor: 'pointer', userSelect: 'none' }}
              >
                {visiblePasswords[item.id || item._id] ? item.password : '••••••••'}
              </span>
              {' '}
              <span style={{ fontSize: '0.8rem', color: '#667eea' }}>
                (click to toggle)
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PasswordsList
