import styled from "@emotion/styled";

export const Card = styled.div`
    width: 100%;
    max-width: 400px;

    margin-bottom: 1rem;
    border-radius: 0.5rem;

    background-color: white;
    box-shadow:
        0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const CardHeader = styled.div`
    padding: 1rem;
    border-bottom: 1px solid #e2e8f0;
`;

export const CardTitle = styled.h3`
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
`;

export const CardContent = styled.div`
    padding: 1rem;
`;
