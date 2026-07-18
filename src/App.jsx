import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import ArtistPage from "./pages/ArtistsPage"
import AlbumPage from "./pages/AlbumPage";
import ArtistForm from "./components/ArtistForm";



function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" replace />} />
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route 
                        path="/albums" 
                        element={
                            <ProtectedRoute>
                                <AlbumPage/>
                            </ProtectedRoute>
                        }/>
                    <Route path="/artists" element={
                            <ProtectedRoute>
                                <ArtistPage/>
                            </ProtectedRoute>
                        }/>
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
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;