import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ArtistPage from "./pages/ArtistsPage"
import AlbumPage from "./pages/AlbumPage";



function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" replace />} />
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/albums" element={<AlbumPage/>}/>
                    <Route path="/artists" element={<ArtistPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;