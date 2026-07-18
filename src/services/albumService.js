import api from "./api";

export const getAlbums = () => {
    return api.get("albums/");
}