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

export default function AlbumCard({ album }) {

    const navigate = useNavigate();
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
        <Card>
            <CardMedia
                component="img"
                height="250"
                image={album.artist.image}
                alt={album.artist.name}
            />

            <CardContent>
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

            <CardActions>
                <Button
                    size="small"
                    variant="contained"
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
            </CardActions>
        </Card>
    );
}