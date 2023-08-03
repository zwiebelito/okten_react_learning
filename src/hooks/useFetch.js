import {useState} from "react";

const useFetch = (endpoint) => {
    const [data, setData] = useState()

    fetch(`https://jsonplaceholder.typicode.com/${endpoint}`).then((res) => res.json()).then(data => setData(data))
    return data;
}

export {useFetch}