import React from 'react'
import {Link}from 'react-router-dom'
const RegisterScreen = () => {
  return (
    <>
 <>
            <h3 className="auth__title">Login</h3>
            <form>
              <input className="auth__input" type="text" placeholder="name" name="name" autoComplete="off" />

                <input className="auth__input" type="text" placeholder="email" name="email" autoComplete="off" />
                <input className="auth__input" type="password" placeholder="password" name="password" />
                <input className="auth__input" type="password" placeholder="Confirm Password" name="password2" />
                <button type="submit" className="btn btn-primary btn-block mb-5">Login</button>
                <hr />
           
                <Link to="/auth/login" className="link mt-5">
                  Already Register
                </Link>
            </form>
        </>
    </>
  )
}

export default RegisterScreen