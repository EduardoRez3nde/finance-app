import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    :root {
        --red: #e52e4d;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --text-title: #363F5F;
        --text-body: #969cb3;
        --background: #F0F2F5;
        --shape: #FFFFFF;
        --border: #cccccc;
    }

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box; 
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background-color: #E5E5E5;
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    
    .custom-modal-overlay {
        background: rgb(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .custom-modal-content {
        background: var(--background);
        width: 90%;
        max-width: 500px;
        border-radius: 0.25rem;
        position: relative;
    }

    .react-modal-close {
        border: 0;
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        background: transparent;

        transform: filter 0.3s;

        &:hover {
            filter: brightness(0.5);
        }
    }


    
`