import React, { useContext } from 'react'
import EntryItem from '../../components/EntryItem'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import Layout from '../../components/Layout'

const FormStyles = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .text {
    width: 90%;
    padding: 5px;
    border-radius: 5px;
    font-size: 1.2em;
    border-width: 1px;
  }
  .textbox {
    width: 90%;
    font-size: 1em;
    border-radius: 5px;
    padding: 5px;
  }
`

export default function Dashboard(props) {
  const { user, checkLogin, logout, authFetch } = useContext(UserContext)

  const [refreshEntries, setRefreshEntries] = useState(true)
  const [name, setName] = useState('!')
  const [submition, setSubmition] = useState({
    content: '',
    emotion: '',
    flagged: false,
    notes: '',
  })
  const [entries, setEntries] = useState(['blank'])

  //This is to prevent a Nextjs Hydration error, fetching from local storage on useEffect
  useEffect(() => {
    setName(user.name)
  }, [user])

  useEffect(() => {
    const fetchData = async () => {
      const res = await authFetch(`${process.env.SERVER_URL}/entries`, {
        method: 'GET',
        headers: {
          token: user.token,
        },
      })
      if (res !== 'logout') {
        setEntries(res?.entries)
      }
    }
    if (refreshEntries) {
      fetchData().catch(console.error)
    }
    setRefreshEntries(false)
  }, [refreshEntries, authFetch, user])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await authFetch(`${process.env.SERVER_URL}/entries`, {
        method: 'POST',
        body: JSON.stringify({ ...submition, date: Date.now() }),
        headers: {
          token: user.token,
          'Content-Type': 'application/json',
        },
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }

    setRefreshEntries(true)
    setSubmition({
      content: '',
      emotion: '',
      flagged: false,
      notes: '',
      date: '',
    })
  }

  const handleChange = (field, e) => {
    setSubmition({
      ...submition,
      [field]: e.target.value,
    })
  }

  return (
    <Layout>
      <h1>Hello, {name}!</h1>
      <FormStyles onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='content'>Event</label>
        <input
          type='text'
          className='text'
          id='content'
          value={submition.content || ''}
          required
          onChange={(e) => handleChange('content', e)}></input>
        <label htmlFor='emotion'>Emotion</label>
        <input
          type='text'
          id='emotion'
          className='text'
          required
          value={submition.emotion || ''}
          onChange={(e) => handleChange('emotion', e)}
        />
        <label htmlFor='notes'>Notes</label>
        <textarea
          type='text'
          id='notes'
          className='textbox'
          value={submition.notes || ''}
          onChange={(e) => handleChange('notes', e)}></textarea>
        <input type='submit' value='Submit'></input>
      </FormStyles>
      {entries?.map((entry, index) => {
        return (
          <EntryItem
            key={index}
            entry={entry}
            setRefreshEntries={setRefreshEntries}></EntryItem>
        )
      })}
    </Layout>
  )
}
