import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const Movie = ({ movie, config }) => {
    return (
        <Link to={`/project/movielist/detail/${movie.id}`}>
            <div className='text-center justify-center hover:underline' >
                {config.images?.base_url && (
                    <img
                        src={config.images.base_url + "w342" + movie.poster_path}
                        alt={movie.title + " Poster"}
                        className="shadow-md rounded-md shadow hover:shadow-lg inline-block" />
                )}
                <h3 className='py-2'>{movie.title}</h3>
            </div>
        </Link>
    )
}

Movie.propTypes = {
    movie: PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            poster_path: PropTypes.string.isRequired
        }
    ).isRequired,
    config: PropTypes.shape(
        {
            images: PropTypes.shape(
                {
                    base_url: PropTypes.string.isRequired
                }
            )
        }
    ).isRequired
}