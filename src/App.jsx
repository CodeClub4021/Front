import Home from "./pages/Home/Home.jsx";
import {Routes, Route} from 'react-router-dom';
import NotFound from "./pages/notFound/notFound.jsx";
import Search from "./pages/search/search.jsx";

function App() {
    return (
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/search" element={<Search />}/>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    )
}

export default App;
