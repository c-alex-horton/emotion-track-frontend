import React, { useState, createContext } from 'react'
import useLocalStorage from '../hooks/UseLocalStorage'
import jwtDecode from 'jwt-decode'
import Router from 'next/router'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage({
    token: '',
  })
  const [message, setMessage] = useState('')

  const checkLogin = () => {
    const decoded = jwtDecode(user.token)
    if (!user.token) {
      Router.push('/')
    }
    if (decoded.exp <= Date.now() / 1000) {
      console.log('it expired')
      setUser({ token: '' })
      Router.push('/')
      return true
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        checkLogin,
        message,
      }}>
      {children}
    </UserContext.Provider>
  )
}
