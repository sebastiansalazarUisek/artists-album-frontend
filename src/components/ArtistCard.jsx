import { useNavigate } from "react-router-dom";
import {Card,CardContent,CardMedia,CardActions,Button,Typography} from "@mui/material";
import { deleteArtist } from "../services/artistService";

export default function ArtistCard({artist}) {

        const navigate = useNavigate();
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
        <Card>
            <CardMedia
                component="img"
                height="250"
                image={artist.image}
                alt={artist.name}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {artist.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {artist.genre}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    onClick={() => navigate(`/artists/${artist.id}/albums`)}
                >
                    Ver Álbumes
                </Button>

                <Button
                    size="small"
                    variant="contained"
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
            </CardActions>
        </Card>
    )
}