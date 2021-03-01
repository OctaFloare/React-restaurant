import history from "../../../core/history"

export const useRoutesOnClick = link =>{
    return () =>{
        history.push(link)
    }
}