import { useNavigate, useParams } from "react-router-dom";
import {
            addArtist,
            getArtistById,
            updateArtist
        } from "../services/artistService";
import { Box, Button,  TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import "./ArtistForm.css";

function ArtistForm () {

    const navigate = useNavigate();
    const {id} = useParams();
    const [artistData, setArtistData] = useState({
        name: "",
        country: "",
        genre: "",
        debut_date: "",
        image: null,
    
    });
    useEffect(() => {

    if (!id) return;

    const loadArtist = async () => {
        try {
            const response = await getArtistById(id);
            setArtistData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    loadArtist();

}, [id]);


    const handleChange = (e) => {
        const { name, value, files} = e.target;

        if (name === "image") {
            setArtistData({
                ...artistData,
                image: files[0]
            });
        } else {
            setArtistData({
                ...artistData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (event) => {

    event.preventDefault();

    try {
        if (id) {
            await updateArtist(id, artistData);
        } else {
            await addArtist(artistData);
        }
        navigate("/artists");
    } catch (error) {
        console.error(error);
    }

};
    return (
    <div className="artist-form-container">

        <Typography
            variant="h4"
            className="artist-form-title"
            gutterBottom
        >
            {id ? "Editar Artista" : "Nuevo Artista"}
        </Typography>

        <Box
            component="form"
            className="artist-form"
            onSubmit={handleSubmit}
        >

            <TextField
                type="text"
                name="name"
                label="Nombre"
                value={artistData.name}
                onChange={handleChange}
                fullWidth
            />

            <TextField
                type="text"
                name="country"
                label="País"
                value={artistData.country}
                onChange={handleChange}
                fullWidth
            />

            <TextField
                type="text"
                name="genre"
                label="Género"
                value={artistData.genre}
                onChange={handleChange}
                fullWidth
            />

            <TextField
                type="date"
                name="debut_date"
                value={artistData.debut_date}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                fullWidth
            />

            <input
                className="artist-file"
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
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
                {id ? "Actualizar Artista" : "Guardar Artista"}
            </Button>

        </Box>

    </div>
);
}


export default ArtistForm