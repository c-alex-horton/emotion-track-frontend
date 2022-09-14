import React from 'react'
import styled from 'styled-components'

const HeaderStyles = styled.header`
  display: flex;
  justify-content: center;
`

export default function Header() {
  return (
    <HeaderStyles>
      <h1>Emotion Tracker</h1>
    </HeaderStyles>
  )
}
