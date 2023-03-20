import { useState } from "react";
import { Movie } from "./Movie";
import { Filter } from "./Filter";
import { useEffect } from "react";

export const MovieList = () => {

    const [filter, setFilter] = useState("")
    const [movies, setMovies] = useState([])
    const [config, setConfig] = useState({})

    const POPULAR_MOVIE_API = "https://api.themoviedb.org/3/movie/popular?language=en-UK&api_key="

    const CONFIG_API = "https://api.themoviedb.org/3/configuration?api_key="

    async function getMovies() {
        try {
            const response = await fetch(POPULAR_MOVIE_API + process.env.REACT_APP_MOVIE_API)
            const movies = await response.json()
            console.log(movies.results)
            setMovies(movies.results)
            return (response)
        } catch (error) {
            console.log(error);
            throw (error)
        }
    }

    async function getConfig() {
        try {
            const response = await fetch(CONFIG_API + process.env.REACT_APP_MOVIE_API)
            const configs = await response.json()
            console.log(configs)
            setConfig(configs)
        } catch (e) { console.log(e); }
    }

    useEffect(
        () => {
            getMovies()
            getConfig()
        }
        , [])

    return (
        <>
            <h3 className="text-center text-2xl py-2">What's popular?</h3>
            <Filter filter={filter} setFilter={setFilter} />
            <ul className="grid gap-5 grid-cols-3">
                {movies
                    .filter((movie) => (movie.title.toLowerCase().includes(filter.toLowerCase())))
                    .map((movie) => <Movie movie={movie} key={movie.id} config={config} />)}
            </ul>
        </>
    )
}

