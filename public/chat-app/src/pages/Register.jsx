import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './../assets/logo.png'

function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('form')
    }
    const handleChange = (event) => { };
  return (
    <div>
       <FormContainer>
          <form onSubmit={(event)=>handleSubmit(event)}>
              <div className="brand">
                <img src={Logo} alt='logo'/>
                <h1>ChatVerse</h1>
              </div>
              <input type='text' name='username' placeholder='Username' onChange={(e)=>handleChange(e)}/>
              <input type='text' name='E-mail' placeholder='Email' onChange={(e)=>handleChange(e)}/>
              <input type='text' name='password' placeholder='Password' onChange={(e)=>handleChange(e)}/>
              <input type='text' name='confirmPassword' placeholder='Confirm Password' onChange={(e)=>handleChange(e)}/>
              <button type='submit'>Create User</button>
              <span>Already have an account? <Link to="/login">login</Link></span>
          </form>
       </FormContainer>
    </div>
  )
}

const FormContainer = styled.div``;

export default Register
