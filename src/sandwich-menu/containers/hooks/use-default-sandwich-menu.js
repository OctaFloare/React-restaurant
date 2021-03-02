import {useState} from "react";

export const useDefaultSandwichMenu = () => {
    const [selected, setSelected] = useState([])
    return {selected, setSelected}
}