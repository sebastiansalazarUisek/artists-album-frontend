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
        <>
            <Typography variant="h4" gutterBottom>
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
                    margin="normal"
                />

                <TextField
                    label="Año de lanzamiento"
                    name="release_year"
                    type="number"
                    value={albumData.release_year}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Número de canciones"
                    name="number_of_tracks"
                    type="number"
                    value={albumData.number_of_tracks}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />

                <Button
                    variant="contained"
                    type="submit"
                >
                    {albumId ? "Actualizar Álbum" : "Guardar Álbum"}
                </Button>

            </Box>
        </>
    );
}

export default AlbumForm;