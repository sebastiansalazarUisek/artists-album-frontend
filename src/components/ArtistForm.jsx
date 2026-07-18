import { useNavigate, useParams } from "react-router-dom";
import {
    addArtist,
    getArtistById,
    updateArtist
} from "../services/artistService";
import { Box, Button,  TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";

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
        <>
            <Typography variant="h4" gutterBottom>
                {id ? "Editar Artista" : "Nuevo Artista"}
            </Typography>
            <Box component = 'form' className="artist-form" onSubmit={handleSubmit}>
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
                    label="Pais"
                    value={artistData.country}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    type="text"
                    name="genre"
                    label="Genero"
                    value={artistData.genre}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    type="date"
                    name="debut_date"
                    label="Año Debut"
                    value={artistData.debut_date}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                />
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    type="submit"
                >
                    {id ? "Actualizar Artista" : "Guardar Artista"}
                </Button>
                
            </Box>
        </>
    );
}


export default ArtistForm