import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Craft from './pages/Craft';
import Village from './pages/Village';
import Visit from './pages/Visit';
import Gallery from './pages/Gallery';
import BookExperience from './pages/BookExperience';
import { useLenis } from './animations/useLenis';

export default function App() {
  useLenis();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/craft" element={<Craft />} />
        <Route path="/village" element={<Village />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/book" element={<BookExperience />} />
      </Routes>
    </BrowserRouter>
  );
}
