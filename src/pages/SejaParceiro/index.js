import { useState } from "react"
import styles from './SejaParceiro.module.css'
import Forms from  '../../components/Forms'
import InputTextForm from  '../../components/InputTextForm'
import Select from  '../../components/Select'
import { useStates } from '../../hooks/useStates'
import { useCities } from '../../hooks/useCities'
import BotaoPrincipal from "../../components/BotaoPrincipal"

const SejaParceiro = () => {
    const {states} = useStates();
    const [selectedState, setSelectedState] = useState('');
    const {cities} = useCities({ uf: selectedState});

    const handleStateUptate = (event) => {
        if (!event.target.value) return;

        const selectedUf = event.target.value;
        setSelectedState(selectedUf);
    }

    return (
        <>
            <Forms title='SEJA PARCEIRO'>
                <InputTextForm
                forId='CenterName'
                labelName='Nome do centro:＊'
                gap={{
                    gap: '8px'
                }}
                />
                <div className='row'>
                    <InputTextForm
                    forId='Phone'
                    labelName='Número de celular:＊'
                    mask='(99) 99999-9999'
                    />
                    <InputTextForm
                    forId='PhoneFix'
                    labelName='Número fixo:'
                    mask='(99) 9999-9999'
                    />
                </div>
                <InputTextForm
                    forId='CEP'
                    labelName='CEP:'
                    mask='99999-999'
                    />
                <Select
                    label={{
                        name: 'Estado＊'
                    }}
                    select={{
                        id: 'States',
                        onChange: handleStateUptate,
                        value: selectedState,
                        required: true
                    }}
                >
                    {selectedState === '' && <option value="">Selecione um estado</option>}
                    {states.map(estado => 
                        <option value={estado.sigla} key={estado.id}>
                            {estado.nome}
                        </option>
                    )}
                </Select>
                <Select
                    label={{
                        name: 'Cidade＊'
                    }}
                    select={{
                        id: 'States',
                        required: true
                    }}
                >
                    {selectedState !== '' ? <option value=''>Selecione uma cidade</option> : <option> </option>}
                    {cities.map(cities => <option key={cities.id}>{cities.nome}</option>)}
                </Select>
                <InputTextForm
                    forId='Endereco'
                    labelName='Endereço:'
                    />
                <BotaoPrincipal
                type='submit'
                texto='Enviar'
                tamanho={{
                    width: 'fit-content'
                }}
                margin={{
                    margin: '1rem 0 0 0'
                }}
                />
            </Forms>
        </>
    )
}

export default SejaParceiro;