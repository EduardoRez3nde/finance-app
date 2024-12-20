import styled from "styled-components";


export const Container = styled.section`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
    width: 100%;
    height: 16vh;
    margin-top: -3rem;
    max-width: 1120px;
    gap: 1rem;

    & div {
        background: var(--background);
        max-width: 1080px;
        width: 100%;
        border-radius: 5px;

    }

    .header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 10px;

    }

    h6 {
        padding: 10px;
        color: var(--text-body);
    }

    h2 {
        padding: 10px  20px;
    }

    .green {
        background-color: #33CC95;
        
    }

    .green h6 {
        color: white;
    }
`