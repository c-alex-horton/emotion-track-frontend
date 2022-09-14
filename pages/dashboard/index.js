import React, { useContext } from 'react'
import EntryItem from '../../components/EntryItem'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'

const FormStyles = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export default function Dashboard(props) {
    const { user } = useContext(UserContext)

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
            const res = await fetch(`${process.env.SERVER_URL}/entries`,
                {
                    method: 'GET',
                    headers: {
                        token: user.token
                    },
                },
            )
            const data = await res.json()
            setEntries(data.entries)
        }
        if (refreshEntries) {
            fetchData().catch(console.error)
        }
        setRefreshEntries(false)
    }, [refreshEntries])


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submition", submition)
        try {
            const res = await fetch(`${process.env.SERVER_URL}/entries`, {
                method: 'POST',
                body: JSON.stringify(submition),
                headers: {
                    token: user.token,
                    'Content-Type': "application/json"
                },
            })
            const data = await res.json()
            console.log(data)
            setRefreshEntries(true)
        } catch (err) {
            console.log(err);
        }

    }

    const handleChange = (field, e) => {
        setSubmition({
            ...submition,
            [field]: e.target.value
        })
    }

    return (
        <div>
            <div>Dashboard Secure</div>
            <FormStyles onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor='content'>Event</label>
                <input type="text" id='content' onChange={(e) => handleChange('content', e)}></input>
                <label htmlFor="emotion">Emotion</label>
                <input type="text" id='emotion' onChange={(e) => handleChange('emotion', e)} />
                <label htmlFor="notes">Notes</label>
                <textarea type="text" id='notes' onChange={(e) => handleChange('notes', e)}></textarea>
                <input type="submit" value="Submit"></input>
            </FormStyles>
            {entries?.map((entry, index) => {
                return (
                    <EntryItem key={index} entry={entry} setRefreshEntries={setRefreshEntries}></EntryItem>
                )
            })}
        </div>
    )
}

// export const getServerSideProps = async (ctx) => {
//     const res = await fetch(`${process.env.SERVER_URL}/entries/`, {
//         method: 'GET',
//         headers: {
//             token: ctx.req.cookies['access_token']
//         }
//     })
//     const json = await res.json()
//     return { props: json }
// }