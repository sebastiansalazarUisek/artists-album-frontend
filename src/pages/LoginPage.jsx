import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

import {
    Paper,
    Typography,
    TextField,
    Button,
    Box,
} from "@mui/material";

import "./LoginPage.css";

function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event) => {

        event.preventDefault();
        setError("");
        try {

            const data = await login(username, password);

            localStorage.setItem(
                "access_token",
                data.access_token
            );
            navigate("/artists");

        console.log("Token guardado correctamente");

                } catch (error) {

                    console.error(error);
                    setPassword("");
                    setError("Usuario o contraseña incorrectos.");

                }

            };

    return (

    <div className="login-container">

        <Paper
            elevation={6}
            className="login-card"
        >

            <Typography
                variant="h4"
                className="login-title"
            >
                🎵 Music Catalog
            </Typography>

            <Typography
                variant="h6"
                className="login-subtitle"
            >
                Iniciar Sesión
            </Typography>

            <Box
                component="form"
                onSubmit={handleLogin}
                className="login-form"
            >

                <TextField
                    label="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                />

                <TextField
                    label="Contraseña"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                />

                {error && (

                    <Typography
                        color="error"
                        className="login-error"
                    >
                        {error}
                    </Typography>

                )}

                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        backgroundColor: "#1E293B",
                        "&:hover": {
                            backgroundColor: "#334155",
                        },
                    }}
                    fullWidth
                >
                    Iniciar sesión
                </Button>

            </Box>

        </Paper>

    </div>

);

}

export default LoginPage;