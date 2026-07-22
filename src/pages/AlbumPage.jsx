import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAlbums } from "../services/albumService";
import AlbumCard from "../components/AlbumCard";
import "./AlbumPage.css";

function AlbumPage () {
    const [albums, setAlbums] = useState([]);
    const isAuthenticated = !!localStorage.getItem("access_token");
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchAlbums = async () => {
            const response = await getAlbums(id);
            console.log(response.data)
            setAlbums(response.data)
        };
        fetchAlbums();
    }, []);

    return (
    <div className="album-page">

        <div className="album-header">

            <h1>Álbumes</h1>

            {isAuthenticated && (

            <Button
                variant="contained"
                sx={{
                backgroundColor: "#1E293B",
                "&:hover": {
                    backgroundColor: "#334155",
                },
            }}
                onClick={() => navigate(`/artists/${id}/albums/new`)}
            >
                Nuevo Álbum
            </Button>

            )}

        </div>

        <div className="album-grid">

            {albums.map((album) => (
                <AlbumCard
                    key={album.id}
                    album={album}
                />
            ))}

        </div>

    </div>
);
}


export default AlbumPage