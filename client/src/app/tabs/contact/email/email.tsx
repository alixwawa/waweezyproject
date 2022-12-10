import React from 'react'
import { useState } from 'react';
import './style.css';

export const Email = () => {


  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event: any) => {
    setValues({ ...values, firstName: event.target.value })
  }

  const handleLastNameInputChange = (event: any) => {
    setValues({ ...values, lastName: event.target.value })
  }

  const handleEmailInputChange = (event: any) => {
    setValues({ ...values, email: event.target.value })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email) {
      setValid(true);
      console.log(values);
    }
    setSubmitted(true);
  }

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div className="success-message">Thank You! I'll hit you up soon!</div>: null}
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          className="form-field"
          placeholder="first Name"
          name="firstName"
        >
        </input>
        {submitted && !values.firstName ? <span className='error-handling'>Please Enter First Name</span>: null}
        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          className="form-field"
          placeholder="last Name"
          name="lastName"
        >
        </input>
        {submitted && !values.lastName ? <span className='error-handling'>Please Enter Last Name</span>: null}
        <input
          onChange={handleEmailInputChange}
          value={values.email}
          className="form-field"
          placeholder="email"
          name="email"
        >
        </input>
        {submitted && !values.email ? <span className='error-handling'>Please Enter Email</span>: null}
        <button
        className='form-field'
        type='submit'
        > Submit
        </button>
      </form>
    </div>

  )
}

export default Email