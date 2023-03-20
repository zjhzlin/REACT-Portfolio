import PropTypes from 'prop-types'

export const Filter = ({ filter, setFilter }) => {

    return (
        <div className = "text-center py-2">Search: {" "}
            <input onChange={(event) => setFilter(event.target.value)} 
            value={filter} className="border border-slate-300 rounded-md px-2" />
        </div>
    )

}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired
}