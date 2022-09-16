import React, { useState, createContext } from 'react'
import useLocalStorage from '../hooks/UseLocalStorage'
import jwtDecode from 'jwt-decode'
import Router from 'next/router'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage({
    token: '',
  })

  // Message to be displayed on login screen
  const [message, setMessage] = useState('')

  // check if the user has a valid jwt. If not,logout
  const checkLogin = () => {
    if (!user.token) {
      logout()
      return 'logout'
    }
    // Check if jwt expired
    if (jwtDecode(user.token).exp <= Date.now() / 1000) {
      logout('Your session has expired')
      return 'logout'
    }
  }

  // logout user
  const logout = (msg = 'You have been logged out') => {
    setUser({ token: '' })
    setMessage(msg)
    Router.push('/')
    return
  }

  const authFetch = async (...args) => {
    if (checkLogin() === 'logout') {
      return
    }
    const result = await fetch(...args).catch((err) => console.log(err))
    const data = await result.json()
    if (data === 'Invalid Token') {
      logout('Your Session has expired.')
      return 'logout'
    }
    return data
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        checkLogin,
        message,
        logout,
        authFetch,
      }}>
      {children}
    </UserContext.Provider>
  )
}
