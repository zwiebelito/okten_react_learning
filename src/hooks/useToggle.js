import {useState} from "react";

const useToggle = (defaultValue) => {
    const [status, setStatus] = useState(defaultValue);
    const changeStatus = () => {
        setStatus(prev => !prev)
    }
    return [status, changeStatus]
}

export {useToggle}