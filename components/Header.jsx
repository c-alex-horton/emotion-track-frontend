import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../context/UserContext'
import { useRouter } from 'next/router'

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
      {router.pathname !== '/' && <button onClick={logout}>Logout</button>}
    </HeaderStyles>
  )
}
