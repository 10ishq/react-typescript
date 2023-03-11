import React from 'react'
import { useState } from 'react'
type AuthUser = {
    name: string
    email: string
}

const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)
    const handleLogin = () => {
        setUser({
            name: 'John',
            email: 'blah@blah.com'
        })}
    const handleLogout = () => {
        setUser(null)
    }

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <h1> {user ? "Logged In as " + user.name : "Logged Out"}</h1>
        <h2> {user ? "Email: " + user.email : ""}</h2>
    </div>
  )
}

export default User