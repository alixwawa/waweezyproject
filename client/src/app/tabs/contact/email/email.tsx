import React from 'react'
import { useState } from 'react';
import { axiosRoutes } from '../../../../api/api';
import './style.css';

export const Email = () => {


  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);

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
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
      setSubmittedSuccessfully(true);
      axiosRoutes.saveInfo({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
      }).then(result => console.log('result', result))
        .catch(function (error) {
          console.log(error);
        });
      console.log(values);
    }
    setSubmitted(true)
    setValues({
      firstName: "",
      lastName: "",
      email: "",
    });
  }

  return (
    <div className="form-container">
      <table className='input-table'>
        <td className='main-table-table'>
          <form className="register-form" onSubmit={handleSubmit}>
            <tr>
              <td>
                {submitted && valid ? <div className="success-message">Thank You! I'll hit you up soon!</div> : null}
              </td>
            </tr>
            <tr>
              <td>
                {submitted && !values.firstName && !submittedSuccessfully ? <span className='error-handling'>Please Enter First Name</span> : null}
                <input
                  onChange={handleFirstNameInputChange}
                  value={values.firstName}
                  className="form-field"
                  placeholder="First Name"
                  name="firstName"
                >
                </input>
              </td>
            </tr>
            <tr>
              <td>
                {submitted && !values.lastName && !submittedSuccessfully ? <span className='error-handling'>Please Enter Last Name</span> : null}
                <input
                  onChange={handleLastNameInputChange}
                  value={values.lastName}
                  className="form-field"
                  placeholder="Last Name"
                  name="lastName"
                >
                </input>
              </td>
            </tr>
            <tr>
              <td>
                {submitted && !values.email && !submittedSuccessfully ? <span className='error-handling'>Please Enter Email</span> : null}
                <input
                  onChange={handleEmailInputChange}
                  value={values.email}
                  className="form-field"
                  placeholder="E-Mail"
                  name="email"
                >
                </input>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  className='form-field-button'
                  type='submit'
                > Submit
                </button>
              </td>
            </tr>
          </form>
        </td>
      </table>
    </div>
  )
}

export default Email