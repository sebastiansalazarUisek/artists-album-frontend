import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAlbums } from "../services/albumService";
import AlbumCard from "../components/AlbumCard";

function AlbumPage () {
    const [albums, setAlbums] = useState([]);
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
        <>
            <h1>
                Albums
            </h1>
            <Button
                variant="contained"
                onClick={() => navigate(`/artists/${id}/albums/new`)}
            >
                Nuevo Álbum
            </Button>
            {albums.map((album) => (
                <AlbumCard key = {album.id}
                album = {album}
            />
            ))}
        </>
    )
}


export default AlbumPage