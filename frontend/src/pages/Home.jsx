import MovieCard from "../components/MovieCard";
import {useState , useEffect} from "react";
import {searchMovies, getPopularMovies} from "../services/api";
import "../css/Home.css";


function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                setError("Error fetching popular movies");
            }
            finally{
                setLoading(false)
            }
        } 
        
      loadPopularMovies()  
    }, [])

    // const movies =[
    //         { id: 1, title: "Inception", year: 2010 },
    //         { id: 2, title: "Interstellar", year: 2014 },
    //         { id: 3, title: "The Dark Knight", year: 2008 },
    //     ]



        const handleSearch = async (e) => {
            e.preventDefault();
            // Implement search logic here, e.g., filter movies based on searchQuery
            if (!searchQuery.trim()) return
            if (loading) return

            setLoading(true)
            try{
                const searchResults = await searchMovies(searchQuery)
                setMovies(searchResults)
                setError(null)
            }catch(err){
                setError("Error fetching search results");
            } finally{
                setLoading(false)
            }

            
        };  

    return <div className="home">
                <form onSubmit={handleSearch} className="search-form">
                    <input 
                        type="text" 
                        placeholder="Search for movies..."
                        className="search-input" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className= "search-button">Search</button>
                </form> 

                {error && <div className="error">{error}</div>}


        {loading ? (
            <div className="loading">Loading movies...</div>
        ):(
        <div className="movie-grid">
            {movies.map(
                (movie) => 
                movie.title.toLowerCase().includes(searchQuery) && (<MovieCard movie={movie} key={movie.id} />

                ))}
        </div>
        )}
    </div>
}

export default Home