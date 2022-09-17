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
`

export default function Dashboard(props) {
    const { user, checkLogin, logout, authFetch } = useContext(UserContext)

    const [refreshEntries, setRefreshEntries] = useState(true)

    const [submition, setSubmition] = useState({
        content: '',
        emotion: '',
        flagged: false,
        notes: ''
    })
    const [entries, setEntries] = useState(["blank"])



    useEffect(() => {
        const fetchData = async () => {
            const res = await authFetch(`${process.env.SERVER_URL}/entries`,
                {
                    method: 'GET',
                    headers: {
                        token: user.token
                    },
                },
            )
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
        e.preventDefault();
        try {
            authFetch(`${process.env.SERVER_URL}/entries`, {
                method: 'POST',
                body: JSON.stringify(submition),
                headers: {
                    token: user.token,
                    'Content-Type': "application/json"
                },
            })
        } catch (error) {
            console.log(error);
        }

        setRefreshEntries(true)
        setSubmition({
            content: '',
            emotion: '',
            flagged: false,
            notes: ''
        })

    }

    const handleChange = (field, e) => {
        setSubmition({
            ...submition,
            [field]: e.target.value
        })
    }

    return (
        <Layout>
            <FormStyles onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor='content'>
                    Event
                </label>
                <input
                    type="text"
                    id='content'
                    value={submition.content || ''}
                    required
                    onChange={(e) => handleChange('content', e)}>
                </input>
                <label htmlFor="emotion">
                    Emotion
                </label>
                <input
                    type="text"
                    id='emotion'
                    required
                    value={submition.emotion || ''}
                    onChange={(e) => handleChange('emotion', e)}
                />
                <label htmlFor="notes">
                    Notes
                </label>
                <textarea
                    type="text"
                    id='notes'
                    value={submition.notes || ''}
                    onChange={(e) => handleChange('notes', e)}>
                </textarea>
                <input type="submit" value="Submit"></input>
            </FormStyles>
            {entries?.map((entry, index) => {
                return (
                    <EntryItem
                        key={index}
                        entry={entry}
                        setRefreshEntries={setRefreshEntries}>
                    </EntryItem>
                )
            })}
        </Layout>
    )
}
