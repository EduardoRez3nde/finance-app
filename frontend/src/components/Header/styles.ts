import styled from "styled-components";


export const Container = styled.header`

    background: var(--blue);
    display: flex;
    justify-content: space-around;
    padding: 1.3rem 0 7rem;

    button {
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        color: #FFF;
        font-weight: bold;
        font-size: 0.9rem;

        transition: filter 0.3s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    div {
        width: 80vw;
        margin: 0 auto;
        max-width: 1120px;

        display: flex;
        justify-content: space-between;
    }


`