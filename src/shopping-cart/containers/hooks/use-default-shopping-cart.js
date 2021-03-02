import {useState} from "react";

export const useDefaultShoppingCart = () =>{
    const [selected, setSelected]= useState([]);
    return {selected,setSelected}
}