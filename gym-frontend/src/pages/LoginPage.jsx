import { useState } from "react";
import "../styles/login.css";

export default function LoginPage({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            console.log("Logging in...");

            const res = await fetch("http://localhost:8080/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            console.log("Response status:", res.status);

            const text = await res.text();
            console.log("Raw response:", text);

            if (!res.ok) {
                alert("Login failed: " + text);
                return;
            }

            const data = JSON.parse(text);

            console.log("Parsed data:", data);

            localStorage.setItem("token", data.token);
            localStorage.setItem("role", data.role);

            onLogin(data.role);

        } catch (error) {
            console.error("Login error:", error);
            alert("Server not reachable");
        }
    };
    return (
        <div className="login-wrapper">
            <div className="login-card">
                <h1>GymOS Admin</h1>
                <p>Secure Access Portal</p>

                <input
                    placeholder="Admin Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
}