import React, { useState, createContext } from 'react'
import useLocalStorage from '../hooks/UseLocalStorage'
import jwtDecode from 'jwt-decode'
import Router from 'next/router'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage({
    token: '',
    refreshToken: '',
    name: '',
    user: '',
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
    console.log(args)
    let result = await fetch(args[0], {
      ...args[1],
      headers: {
        token: user.token,
        'Content-Type': 'application/json',
      },
    }).catch((err) => console.log(err))
    let data = await result.json()
    if (data === 'Invalid Token') {
      let refreshResult = await fetch(`${process.env.SERVER_URL}/auth/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Access-Allow-Methods': 'POST',
          // 'Access-Control-Allow-Credentials': 'true',
        },
        body: JSON.stringify({
          userId: user.userId,
          refreshToken: user.refreshToken,
        }),
      })
      if (refreshResult.status === 200) {
        const refreshData = await refreshResult.json()
        setUser({
          ...user,
          refreshToken: refreshData.newRefresh,
          token: refreshData.newAccess,
        })
        result = await fetch(args[0], {
          ...args[1],
          headers: {
            token: refreshData.newAccess,
            'Content-Type': 'application/json',
          },
        }).catch((err) => console.log(err))
        let data = await result.json()
        console.log('Refresh Successful!')
      } else {
        logout('Your Session has expired.')
        return 'logout'
      }
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
