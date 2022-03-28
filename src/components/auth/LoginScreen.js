import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/auth";
import useForm from "../../hooks/useForm";

const LoginScreen = () => {
    const [formValue, handleInput] = useForm({
        email: "carapito@gmail.com",
        password: "1234421",
    });
    const dispatch = useDispatch();

    const { email, password } = formValue;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(13265, "arthurjim013@gmail.com"));
    };
    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={handleLogin}>
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
                <button type="submit" className="btn btn-primary btn-block">
                    Login
                </button>
                <hr />
                <div className="auth__solcial-networks">
                    <p>Login with social networks</p>
                    <div className="google-btn">
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
