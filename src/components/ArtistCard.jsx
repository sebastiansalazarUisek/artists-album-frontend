import "./ArtistCard.css";
import { useNavigate } from "react-router-dom";
import {Card,CardContent,CardMedia,CardActions,Button,Typography} from "@mui/material";
import { deleteArtist } from "../services/artistService";

export default function ArtistCard({artist}) {

        const navigate = useNavigate();
        const isAuthenticated = !!localStorage.getItem("access_token");
        const handleDelete = async () => {

            const confirmDelete = window.confirm(
                "¿Eliminar este artista?"
            );

            if (!confirmDelete) return;

            try {

                await deleteArtist(artist.id);

                window.location.reload();

            } catch (error) {

                console.error(error);

            }

        };

    
    return (
        <Card className="artist-card">
            <CardMedia
                className="artist-card-image"
                component="img"
                image={artist.image}
                alt={artist.name}
            />
            <CardContent className="artist-card-content">
                <Typography variant="h5" component="div">
                    {artist.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {artist.genre}
                </Typography>
            </CardContent>
            <CardActions className="artist-card-actions">
                <Button
                    size="small"
                    
                    onClick={() => navigate(`/artists/${artist.id}/albums`)}
                >
                    Ver Álbumes
                </Button>

                {isAuthenticated && (
                    <>
                        <Button
                            size="small"
                            variant="contained"
                            sx={{
                                backgroundColor: "#1E293B",
                                "&:hover": {
                                    backgroundColor: "#334155",
                                },
                            }}
                            onClick={() => navigate(`/artists/${artist.id}/edit`)}
                        >
                            Editar
                        </Button>

                        <Button
                            size="small"
                            variant="outlined"
                            color="error"
                            onClick={handleDelete}
                        >
                            Eliminar
                        </Button>
                    </>
                )}
            </CardActions>
        </Card>
    )
}