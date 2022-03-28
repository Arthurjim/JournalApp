import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import useForm from "../../hooks/useForm";
import { removeError, setError } from "../../actions/ui";
import {startRegisterManual} from '../../actions/auth'
const RegisterScreen = () => {
    const { msgError } = useSelector((state) => state.ui);
    const [formValue, handleInput] = useForm({
        name: "Arturin",
        email: "arturo@gmail.com",
        password: "123456789",
        password2: "123456789",
    });
    const dispatch = useDispatch();
    const { name, email, password, password2 } = formValue;
    const handleRegister = (e) => {
        e.preventDefault();
        isFormValid();
        dispatch(startRegisterManual(email, password, name));
    };

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError("El nombre es requerido"));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError("email invalido"));

            return false;
        } else if (password !== password2 || password.length < 8) {
            dispatch(
                setError("Password shuld be equalt and more than 8 characters")
            );

            return false;
        }
        dispatch(removeError());

        return true;
    };
    return (
        <>
            <>
                <h3 className="auth__title">Login</h3>
                <form onSubmit={handleRegister}>
                    {msgError && (
                        <div className="auth__alert-error">*{msgError}*</div>
                    )}

                    <input
                        className="auth__input"
                        type="text"
                        placeholder="name"
                        name="name"
                        autoComplete="off"
                        onChange={handleInput}
                        value={name}
                    />

                    <input
                        className="auth__input"
                        type="text"
                        placeholder="email"
                        name="email"
                        autoComplete="off"
                        onChange={handleInput}
                        value={email}
                    />
                    <input
                        className="auth__input"
                        type="password"
                        placeholder="password"
                        name="password"
                        onChange={handleInput}
                        value={password}
                    />
                    <input
                        className="auth__input"
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        onChange={handleInput}
                        value={password2}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary btn-block mb-5"
                    >
                        Login
                    </button>
                    <hr />

                    <Link to="/auth/login" className="link mt-5">
                        Already Register
                    </Link>
                </form>
            </>
        </>
    );
};

export default RegisterScreen;
