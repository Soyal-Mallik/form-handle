import React, { useState} from 'react'

import styles from './from.module.css'

export default function Form() {

  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const handleNameChange = (e) =>{
    setName(e.target.value)
  }
  const handleEmailChange = (e) =>{
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) =>{
    setPassword(e.target.value)
  }
  const handleSubmit = (e) =>{
    console.log('Form submitted')
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Password:', password)
    e.preventDefault()
  }
  return (
    <div className={styles.formContainer}>
      <h1>Registration</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name'required value={name} placeholder='Enter your name' onChange={handleNameChange}></input>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email'required value={email} placeholder='Enter your email' onChange={handleEmailChange}></input>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='password'>Password:</label>
          <input type='password' name='password'required value={password} placeholder='Enter your password' onChange={handlePasswordChange}></input>
        </div>
        <div>
          <button type='submit'>Register</button>
        </div>
        
      </form>
    </div>
  )
}
