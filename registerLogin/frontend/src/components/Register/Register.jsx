import { useState } from 'react'
import './Register.css'

const Register = () => {
  const [user,setUser] = useState({
    name: '',
    email:'',
    password:'',
    reEnterPassword:'',
  })

  const handleChange = (e) => {
    const {name,value} = e.target
    setUser({
      ...user,
      [name]:value,
    })
  }

  return (
    <div className="register">
      <h1>Register Now</h1>
      <input type="text" name='name' value={user.name} placeholder="what's your name" onChange={handleChange} autoComplete='off'/>
      <input type="text" name='email' value={user.email} placeholder="Enter your webaddress" onChange={handleChange} autoComplete='off'/>
      <input type="password" name='password' value={user.password} placeholder="Enter your password" onChange={handleChange} autoComplete='off'/>
      <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-Enter your password" onChange={handleChange} autoComplete='off'/>
      <div className="button">Register</div>
      <div>or</div>
      <div className="button">Login</div>
    </div>
  )
}

export default Register
