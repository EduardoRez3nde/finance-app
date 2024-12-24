import { transparentize } from "polished";
import styled from "styled-components";


export const Container = styled.form`

    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 960;
    gap: 1rem;
    padding: 3rem;

    input {
        padding: 1rem;
        background-color: lavender;
        border: 0;
        border-radius: 5px;
        border: 1px solid #d6d6d6;
    }

    .button-register {
        background-color: #33CC95;
        padding: 1rem;
        border: 0;
        border-radius: 5px;
        color: white;
        font-weight: bold;
    }

    h2 {
        margin-bottom: 10px;
    }
`

export const TypeTransactionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;    
`

interface RadioProps {
    $isActive: boolean;
    $colorActive: 'green' | 'red';
}

const colors = {
    green: '#33CC95',
    red: '#e52e4d'
}

export const Button = styled.button<RadioProps>`
    
    height: 3rem;
    border-radius: 0.24rem;
    border: 1px solid #d7d7d7;
    background: transparent;
    transition: border-color 0.2s; 
    
    background: ${(props) => props.$isActive
     ? transparentize(0.8, colors[props.$colorActive])
     : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.40rem;
     
    &:hover {
        border-color: #a5a5a5;
    }  
`
