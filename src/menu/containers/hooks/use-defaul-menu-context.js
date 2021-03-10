import {useState} from "react";

export const useDefaultMenuContext = () => {
    const [data, setData] = useState([])
    return {data, setData}
}