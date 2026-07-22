import {
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Button,
    Typography
} from "@mui/material";
import { deleteAlbum } from "../services/albumService";
import { useNavigate } from "react-router-dom";
import "./AlbumCard.css"

export default function AlbumCard({ album }) {

    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem("access_token");
    const handleDelete = async () => {

    const confirmDelete = window.confirm(
        "¿Estás seguro de eliminar este álbum?"
    );

    if (!confirmDelete) return;

    try {

        await deleteAlbum(album.id);

        window.location.reload();

    } catch (error) {

        console.error(error);

    }

};

    return (
        <Card className="album-card">
            <CardMedia
                className="album-card-image"
                component="img"
                image={album.artist.image}
                alt={album.artist.name}
            />

            <CardContent className="album-card-content">
                <Typography variant="h5" component="div">
                    Título: {album.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Año: {album.release_year}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Artista: {album.artist.name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Número de canciones: {album.number_of_tracks}
                </Typography>
            </CardContent>

            <CardActions className="album-card-actions">
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
                    onClick={() =>
                        navigate(`/artists/${album.artist.id}/albums/${album.id}/edit`)
                    }
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
    );
}