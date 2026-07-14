import api from "./api";

export const getArtists = () => {
    return api.get("artists/");
}
