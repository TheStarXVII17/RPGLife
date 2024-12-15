import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const LoginRegister = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === "themalo1738" && password === "1738malothe") {
            navigate("/dashboard");
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className="login-register">
            <h1>RPGLife</h1>
            <p>An Adventure Awaits!</p>
            <div className="form">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default LoginRegister;
