import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import styled from 'styled-components'
import { format, parseISO } from 'date-fns'

const EntryStyles = styled.div`
  flex-direction: column;
  background-color: #25242b;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  position: relative;
  color: white;
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
  const { user, authFetch } = useContext(UserContext)

  const handleDelete = async () => {
    try {
      const body = { id: entry.article_id }

      const res = await authFetch(`${process.env.SERVER_URL}/entries`, {
        method: 'DELETE',
        body: JSON.stringify(body),
        headers: {
          token: user.token,
          'Content-Type': 'application/json',
        },
      })
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
      <p>
        {entry?.date && format(parseISO(entry?.date), 'MMM, d, y - h:mm aaaa')}
      </p>
      <div className='close' onClick={handleDelete}>
        X
      </div>
    </EntryStyles>
  )
}
