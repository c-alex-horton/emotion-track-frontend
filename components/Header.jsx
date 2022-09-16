import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../context/UserContext'

const HeaderStyles = styled.header`
  display: flex;
  justify-content: center;
`

export default function Header() {
  const { logout } = useContext(UserContext)
  return (
    <HeaderStyles>
      <h1>Emotion Tracker</h1>
      <button onClick={logout}>Logout</button>
    </HeaderStyles>
  )
}
