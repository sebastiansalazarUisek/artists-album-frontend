import api from "./api";

export const getArtists = () => {
    return api.get("artists/");
}

export const addArtist = (artistData) => {

    const formData = new FormData();

    formData.append("name", artistData.name);
    formData.append("country", artistData.country);
    formData.append("genre", artistData.genre);
    formData.append("debut_date", artistData.debut_date);
    formData.append("image", artistData.image);

    return api.post("artists/", formData);
};

export const getArtistById = (id) => {
    return api.get(`artists/${id}`);
};

export const updateArtist = (id, artistData) => {

    const formData = new FormData();

    formData.append("name", artistData.name);
    formData.append("country", artistData.country);
    formData.append("genre", artistData.genre);
    formData.append("debut_date", artistData.debut_date);

    if (artistData.image instanceof File) {
        formData.append("image", artistData.image);
    }

    return api.patch(`artists/${id}/`, formData);

};