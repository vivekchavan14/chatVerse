import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './../assets/logo.svg'

function Register() {
    const [values,setValues] = useState({
        username : " ",
        email : " ",
        password : " ",
        confirmPassword : " ",
    })

    const handleValidation = (event) => {

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('form')
    }
    const handleChange = (event) => {
            setValues({...values,[event.target.name]:event.target.values})
     };

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

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;

    img {
      height: 5rem;
    }

    h1 {
      color: white;
      text-transform: uppercase;
    
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;

    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;

      &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }

    button { // Removed the colon after "button"
      background-color: #997af0;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.5s ease-in-out;

      &:hover {
        background-color: #4e0eff;
      }
    }
    span{
        color : white;
        text-transform : uppercase;
        a{
            color: #4e0eff;
            text-decoration : none;
            font-weight : bold;

        }

    }
  }
`;


export default Register
