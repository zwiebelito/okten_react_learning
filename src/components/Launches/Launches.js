import {useEffect, useState} from "react";
import Launch from "../Launch/Launch";

export const Launches = () => {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then((response) => response.json())
            .then((launch) => setLaunches(launch))
    }, [])


    return (
        <>
            {launches.filter(launch => launch.launch_year !== '2020').map((launch) => {
                return <Launch key={launch.id} launch={launch}/>
            })}
        </>
    )
}