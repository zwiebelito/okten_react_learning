import {useState} from "react";

const useArray = (defaultValue) => {
    const [data, setData] = useState(Array.isArray(defaultValue) ? defaultValue : [])

    const add = (item) => {
        setData(prevState => [...prevState, item])
    }

    const remove = (index) => {
        setData(prevState => {
            prevState.splice(index, 1)
            return [...prevState]
        })
    }

    return {data, add, remove}
}

export {useArray};