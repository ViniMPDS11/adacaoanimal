import { useEffect, useState } from "react"

export const useStates = () => {
    const [states, setStates] = useState([])


    useEffect(() => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then((response) => response.json()
        .then((data) => setStates(data)))
    }, []);

    return {
        states
    }
}