import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function Navbar() {

    const navigate = useNavigate();

    const isAuthenticated = !!localStorage.getItem("access_token");

    const handleLogout = () => {

    localStorage.removeItem("access_token");

    navigate("/artists");

    };
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "#1E293B",
                boxShadow: 3,
            }}
        >
            <Toolbar>

                <Typography
                    variant="h5"
                    component={Link}
                    to="/artists"
                    sx={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "bold",
                    }}
                >
                    🎵 Music Catalog
                </Typography>
                <Button
                    color="inherit"
                    sx={{ marginLeft: "auto" }}
                    onClick={isAuthenticated ? handleLogout : () => navigate("/login")}
                >
                    {isAuthenticated ? "Cerrar sesión" : "Iniciar sesión"}
                </Button>

            </Toolbar>
        </AppBar>
    );
}
