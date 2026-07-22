import { useNavigate, useParams } from "react-router-dom";
import {
    addAlbum,
    getAlbumById,
    updateAlbum
} from "../services/albumService";

import {
    Box,
    Button,
    TextField,
    Typography
} from "@mui/material";

import { useState, useEffect } from "react";
import "./AlbumForm.css"

function AlbumForm() {

    const navigate = useNavigate();

    const { artistId, albumId } = useParams();

    const [albumData, setAlbumData] = useState({
        title: "",
        release_year: "",
        number_of_tracks: ""
    });

    useEffect(() => {

        if (!albumId) return;

        const loadAlbum = async () => {

            try {

                const response = await getAlbumById(albumId);

                setAlbumData(response.data);

            } catch (error) {

                console.error(error);

            }

        };

        loadAlbum();

    }, [albumId]);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setAlbumData({
            ...albumData,
            [name]: value
        });

    };

    const handleSubmit = async (event) => {

    event.preventDefault();

    const album = {
        ...albumData,
        artist_id: artistId
    };

    try {

        if (albumId) {

            await updateAlbum(albumId, album);

        } else {

            await addAlbum(album);

        }

        navigate(`/artists/${artistId}/albums`);

    } catch (error) {

        console.error(error);

    }

};

    return (
    <div className="album-form-container">

        <Typography
            variant="h4"
            className="album-form-title"
            gutterBottom
        >
            {albumId ? "Editar Álbum" : "Nuevo Álbum"}
        </Typography>

        <Box
            component="form"
            className="album-form"
            onSubmit={handleSubmit}
        >

            <TextField
                label="Título"
                name="title"
                value={albumData.title}
                onChange={handleChange}
                fullWidth
            />

            <TextField
                label="Año de lanzamiento"
                name="release_year"
                type="number"
                value={albumData.release_year}
                onChange={handleChange}
                fullWidth
            />

            <TextField
                label="Número de canciones"
                name="number_of_tracks"
                type="number"
                value={albumData.number_of_tracks}
                onChange={handleChange}
                fullWidth
            />

            <Button
                variant="contained"
                sx={{
                backgroundColor: "#1E293B",
                "&:hover": {
                    backgroundColor: "#334155",
                },
            }}
                type="submit"
                fullWidth
            >
                {albumId ? "Actualizar Álbum" : "Guardar Álbum"}
            </Button>

        </Box>

    </div>
);
}

export default AlbumForm;