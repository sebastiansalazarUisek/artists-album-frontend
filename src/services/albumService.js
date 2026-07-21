import api from "./api";

export const getAlbums = (artistId) => {
    return api.get(`albums/?artist=${artistId}`);
};

export const getAlbumById = (id) => {
    return api.get(`albums/${id}/`);
};

export const addAlbum = (albumData) => {
    return api.post("albums/", albumData);
};

export const updateAlbum = (id, albumData) => {
    return api.patch(`albums/${id}/`, albumData);
};

export const deleteAlbum = (id) => {
    return api.delete(`albums/${id}/`);
};