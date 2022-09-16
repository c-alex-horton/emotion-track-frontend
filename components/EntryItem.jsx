import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import styled from 'styled-components'

const EntryStyles = styled.div`
  flex-direction: column;
  background-color: #25242b;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  position: relative;
  h2 {
    font-size: 1.2em;
    margin: 0;
  }
  .close {
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }
`

export default function EntryItem({ entry, setRefreshEntries }) {
  const { user, message } = useContext(UserContext)

  const handleDelete = async () => {
    try {
      const body = { id: entry.article_id }

      const res = await fetch(`${process.env.SERVER_URL}/entries`, {
        method: 'DELETE',
        body: JSON.stringify(body),
        headers: {
          token: user.token,
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()
      setRefreshEntries(true)
      console.log('deleted!')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <EntryStyles>
      <h1>{entry.content}</h1>
      <h2>Emotion: {entry.emotion}</h2>
      <p>{entry.notes}</p>
      <div className='close' onClick={handleDelete}>
        X
      </div>
    </EntryStyles>
  )
}
