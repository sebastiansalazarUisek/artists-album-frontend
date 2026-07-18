import {Card,CardContent,CardMedia,CardActions,Button,Typography} from "@mui/material";

export default function AlbumCard({album}) {
    
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
                    Titulo: {album.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Año: {album.release_year}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Artista: {album.artist.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Numero de canciones: {album.number_of_tracks}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Mas informacion</Button>
            </CardActions>
        </Card>
    )
}