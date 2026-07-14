import { useState } from "react";
import { login } from "../services/authService";

function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) => {

        event.preventDefault();

        try {

            const data = await login(username, password);

            localStorage.setItem(
                "access_token",
                data.access_token
            );

console.log("Token guardado correctamente");

        } catch (error) {

            console.error(error);

        }

    };

    return (
        <>
            <h1>Iniciar Sesión</h1>

            <form onSubmit={handleLogin}>

                <input
                    type="text"
                    placeholder="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Ingresar
                </button>

            </form>

        </>
    );

}

export default LoginPage;