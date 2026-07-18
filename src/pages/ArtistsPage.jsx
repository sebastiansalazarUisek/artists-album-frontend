import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getArtists } from "../services/artistService";
import ArtistCard from "../components/ArtistCard";


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

    return (
        <>
            <h1>Artistas</h1>
            <Button
                variant ="contained"
                onClick={() => navigate("/artists/new")}
            >
                Nuevo Artista
            </Button>
            {artists.map((artist) => (
            <ArtistCard
                key={artist.id}
                artist={artist}
            />
        ))}
        </>
    );

}

export default ArtistsPage;