import { useEffect, useState } from "react"

export const Flight = () => {

    const FLIGHT_API = "https://api.flights.owenmerry.com/price?from=27544008&month="
    const MONTH = "3"
    const [flights, setFlights] = useState({})


    async function getFlightPrices () {
        const response = await fetch(FLIGHT_API + MONTH)
        const result = await response.json()
        console.log(result)
        setFlights(result)
    }
    
    useEffect(()=>{getFlightPrices()},[])

    return (
        
        <div>STATUS: {flights.status}</div>

    )

}
