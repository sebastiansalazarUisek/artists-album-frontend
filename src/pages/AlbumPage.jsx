import { useEffect, useState } from "react";
import { getAlbums } from "../services/albumService";
import AlbumCard from "../components/AlbumCard";

function AlbumPage () {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        const fetchAlbums = async () => {
            const response = await getAlbums();
            console.log(response.data)
            setAlbums(response.data)
        };
        fetchAlbums();
    }, []);

    return (
        <>
            <h1>
                Albums
            </h1>
            {albums.map((album) => (
                <AlbumCard key = {album.id}
                album = {album}
            />
            ))}
        </>
    )
}


export default AlbumPage