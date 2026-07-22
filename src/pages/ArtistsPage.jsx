import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getArtists } from "../services/artistService";
import ArtistCard from "../components/ArtistCard";
import "./ArtistsPage.css";


function ArtistsPage() {
    const navigate = useNavigate();
    const [artists, setArtists] = useState([]);
    useEffect(() => {
        const fetchArtists = async () => {
            const response = await getArtists();
            console.log(response.data);
            setArtists(response.data);
        };
        fetchArtists();


    }, []);
    const isAuthenticated = !!localStorage.getItem("access_token");

    return (
    <div className="artists-page">

        <div className="artists-header">
            <h1>Artistas</h1>

            {isAuthenticated && (
                <Button
                variant="contained"
                sx={{
                    backgroundColor: "#1E293B",
                    "&:hover": {
                        backgroundColor: "#334155",
                    },
                }}
                onClick={() => navigate("/artists/new")}
            >
                Nuevo Artista
            </Button>
            )}
        </div>

        <div className="artists-grid">
            {artists.map((artist) => (
                <ArtistCard
                    key={artist.id}
                    artist={artist}
                />
            ))}
        </div>

    </div>
);

}

export default ArtistsPage;