import { useEffect, useState } from "react"

export const useCities = ({ uf }) => {
    const [cities, setCities] = useState([])


    useEffect(() => {
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        .then((response) => response.json()
        .then((data) => setCities(data)));
    }, [uf]);

    return {
        cities
    }
}