import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {
    
    startGoogleLogin,
    startLoginEmailPassword,
} from "../../actions/auth";
import useForm from "../../hooks/useForm";

const LoginScreen = () => {
    const [formValue, handleInput] = useForm({
        email: "arturo@gmail.com",
        password: "12345678",
    });
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.ui);
    const { email, password } = formValue;

    const handleLogin = (e) => {
        e.preventDefault();
        if(email.trim() === "" || password.trim() === ""){
            return;
        }
        dispatch(startLoginEmailPassword(email, password));
    };
    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    };
    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={handleLogin}
                className="animate__animated animate__fadeIn animate__faster">
                <input
                    className="auth__input"
                    type="text"
                    placeholder="email"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInput}
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleInput}
                    value={password}
                />
                <button type="submit" className="btn btn-primary btn-block mt-5" disabled={isLoading}>
                    Login
                </button>
                <div className="auth__solcial-networks">
                    <p className="mt-5 mb-5">Login with social networks</p>
                    <div className="google-btn" onClick={handleGoogleLogin}>
                        <div className="google-icon-wrapper">
                            <img
                                className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="google button"
                            />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link to="/auth/register" className="link">
                    Create new account
                </Link>
            </form>
        </>
    );
};

export default LoginScreen;
