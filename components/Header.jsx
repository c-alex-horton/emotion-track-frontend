import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../context/UserContext'
import { useRouter } from 'next/router'
import Link from 'next/link'

const HeaderStyles = styled.header`
  display: flex;
  justify-content: center;
`

export default function Header() {
  const router = useRouter()
  const { logout } = useContext(UserContext)
  return (
    <HeaderStyles>
      <h1>Emotion Tracker</h1>
      {router.pathname === '/dashboard' && (
        <button onClick={(e) => logout('Youve been logged out, yo')}>
          Logout
        </button>
      )}
      {router.pathname === '/' && (
        <Link href='/register'>
          <a>Sign Up</a>
        </Link>
      )}
      {router.pathname === '/register' && (
        <Link href='/'>
          <a>Sign In</a>
        </Link>
      )}
    </HeaderStyles>
  )
}
