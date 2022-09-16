import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { useState, useContext } from 'react'
import Router, { useRouter } from 'next/router'
import { UserContext } from '../context/UserContext'

const LoginStyles = styled.div`
  display: flex;
  form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  .message {
    color: #d30000
  }
`

export default function Home() {
  const { user, setUser, message } = useContext(UserContext)

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.SERVER_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Access-Allow-Methods': 'POST',
          'Access-Control-Allow-Credentials': 'true',
        },
        credentials: 'include',
        redirect: 'follow',
        body: JSON.stringify({
          "email": username,
          "password": password
        })
      })

      const data = await response.json()
      console.log(data)
      if (response.status === 200) {
        setUser({
          token: data.token
        })
        Router.push("/dashboard")
      }
    } catch (err) {
      console.log(err);
    }

  }

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <Layout>
      <Head>
        <title>Emotion Tracker</title>
        <meta name="description" content="Track your emotions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginStyles>
        {/* <p className="message">{message}</p> */}
        <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
          <label>Email</label>
          <input type="text" onChange={(e) => handleUsername(e)} />
          <label>Password</label>
          <input type="password" onChange={(e) => handlePassword(e)} />
          <input type="submit" value={"Login"} />
        </form>
      </LoginStyles>

    </Layout>
  )
}
