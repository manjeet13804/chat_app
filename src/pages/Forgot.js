import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await sendPasswordResetEmail(auth, email);
            setSuccess(true);
            toast.success("Password reset instructions sent to your email.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            setSuccess(false);
            toast.error("Oops! Incorrect Eamil", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }
    };

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Real Time Chat App</span>
                <span className="title">Forgot Password</span>
                <form onSubmit={handleSubmit}>

                    <div className="log">
                        <input
                            type="email"
                            placeholder="Enter your registered email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <button type="submit">Reset Password</button>
                </form>
                {success && (
                    <p>
                        Go to <Link to="/login" className="link">Login Page</Link>
                    </p>
                )}
                {!success && (
                    <p>
                        Remember your password? <Link className="link" to="/login">Log in</Link>
                    </p>
                )}
                <ToastContainer />
            </div>
        </div>
    );
};

export default ForgotPassword;
