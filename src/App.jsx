import { BrowserRouter, Route, Routes } from "react-router";
import Movies from "./pages/movies";
import { SearchProvider } from "./context/CreateContext";
import ErrorPage from "./pages/ErrorPage";
import Movie from "./pages/Movie";
// import Pagination from "./components/Pagination";

function App() {
  return (

    
      
    <BrowserRouter>
        
        <SearchProvider>
        <Routes>

        <Route path="/" element={<Movies />} />
          <Route path="/search/:search/page/:page" element={<Movies />} />
          <Route path="/:id" element={<Movie/>}/>
          <Route path="*" element={<ErrorPage/>}/>
      </Routes>
        </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
