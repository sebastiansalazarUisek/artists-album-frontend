import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import ArtistPage from "./pages/ArtistsPage"
import AlbumPage from "./pages/AlbumPage";
import ArtistForm from "./components/ArtistForm";
import AlbumForm from "./components/AlbumForm"
import Navbar from "./components/Navbar"



function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Navigate to="/artists" replace />} />
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route 
                        path="/albums" 
                        element={
                            <ProtectedRoute>
                                <AlbumPage/>
                            </ProtectedRoute>
                        }/>
                    <Route
                        path="/artists"
                        element={<ArtistPage />}
                    />
                    <Route path="/artists/new" element={
                            <ProtectedRoute>
                                <ArtistForm/>
                            </ProtectedRoute>
                        }/>
                    <Route
                        path="/artists/:id/edit"
                        element={
                            <ProtectedRoute>
                                <ArtistForm />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/artists/:id/albums"
                        element={<AlbumPage />}
                    />
                    <Route
                        path="/artists/:artistId/albums/new"
                        element={
                            <ProtectedRoute>
                                <AlbumForm />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/artists/:artistId/albums/:albumId/edit"
                        element={
                            <ProtectedRoute>
                                <AlbumForm />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;