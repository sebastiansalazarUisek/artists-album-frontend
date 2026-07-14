import {Card,CardContent,CardMedia,CardActions,Button,Typography} from "@mui/material";

export default function ArtistCard({artist}) {
    
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
                <Button size="small">Ver Álbumes</Button>
            </CardActions>
        </Card>
    )
}