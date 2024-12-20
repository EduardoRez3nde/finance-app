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

    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;

    button {
        width: 100%;
        padding: 5px;
        border: 0;
        border-radius: 5px;

        display: flex;
        justify-content: center;
        gap: 10px;
        align-items: center;
    }
`

