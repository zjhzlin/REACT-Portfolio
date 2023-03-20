import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const BASE_URL = "https://api.themoviedb.org/3/movie/"
const API_KEY = "?api_key="

const IMAGE_URL = "http://image.tmdb.org/t/p/"
const BACKDROP_SIZE = "original"
const POSTER_SIZE = "w342"

export const MovieDetail = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState({})

    async function getMovie() {
        try {
            const response = await fetch(BASE_URL + id + API_KEY + process.env.REACT_APP_MOVIE_API)
            const newMovie = await response.json()
            setMovie(newMovie)
            console.log(newMovie)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMovie()
    }, [id])

    if (!movie.title) return null

    return (
        <div>
            <img src={IMAGE_URL + BACKDROP_SIZE + movie.backdrop_path}
                alt={movie.title + " BACKDROP"}
                className="position-absolute " />
            <div className="position-relative flex mt-5 gap-5 p-5">
                <img src={IMAGE_URL + POSTER_SIZE + movie.poster_path}
                    alt={movie.title + " POSTER"}
                    className="-mt-[160px] position-relative shadow-lg" />
                <div>
                    <h1 className="text-lg font-bold mb-5">{movie.title}</h1>
                    <p className="mb-5">
                        <span className = "font-bold">Description: </span>{movie.overview}</p>
                    <ul>
                        {
                            movie.genres.map(
                                (genre) => <li key={genre.id}>{genre.name}</li>
                            )
                        }
                    </ul>
                </div>

            </div>

        </div>
    )
}