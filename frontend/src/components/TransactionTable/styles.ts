import styled from "styled-components";


export const Container = styled.section`

    margin-top: 3rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 1rem;
            text-align: left;
            line-height: 1.5rem;
        }
 
        td {
            font-weight: 500;
            padding: 1rem 1rem;
            border: 0;
            background: var(--shape);
            border-radius: 0.30rem;
            color: var(--text-body);

            .title {
                color: var(--text-title);
            }

            &.deposit {
                color: #33CC95;
            }

            &.withdraw {
                color: var(--red);
            }
        }
        
    }

`