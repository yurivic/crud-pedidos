import React, { useState } from 'react'
import Select from 'react-select'
import { FormLabel } from '../Input/styles';
import { ContainerSelect } from './style';

export default function TesteDeSelect() {
    const [isClearable, setIsClearable] = useState(true)

    const tipoSelect = [
        { value: 'boleto', label: 'Boleto', color: '#000000' },
        { value: 'cartao', label: 'Cartão de crédito', color: '#000000' },
        { value: 'pix', label: 'Pix', color: '#000000' },
        { value: 'dinheiro', label: 'Dinheiro', color: '#000000' },
        { value: 'promissoria', label: 'Promissória', color: '#000000' },
    ];

    const customStyles = {
        control: (base) => ({
            ...base,
            height: '28px', // Define a altura
            minHeight: '28px',
            padding: '0px 8px', // Reduz o padding para controlar o espaçamento interno
            display: 'flex',
            alignItems: 'flex-start', // Alinha os itens no centro verticalmente
        }),
        singleValue: (base) => ({
            ...base,
            lineHeight: '30px', // Alinha o texto verticalmente
            paddingTop: '-15px', // Ajusta o padding do texto
        }),
        placeholder: (base) => ({
            ...base,
            lineHeight: '28px', // Alinha o placeholder
            paddingTop: '-15px', // Ajusta o padding do placeholder
        }),
        dropdownIndicator: (base) => ({
            ...base,
            color: '#333',
            paddingTop: '0px', // Ajusta a posição do ícone do dropdown
        }),
        clearIndicator: (base) => ({
            ...base,
            color: '#FF0000',
            cursor: 'pointer',
            paddingTop: '0px', // Ajusta a posição do ícone de limpar
        }),
    };

    return (
        <ContainerSelect>
            <FormLabel>
                <Select
                    options={tipoSelect}
                    isClearable={true}
                    styles={customStyles}
                />
            </FormLabel>
        </ContainerSelect>
    );
}
