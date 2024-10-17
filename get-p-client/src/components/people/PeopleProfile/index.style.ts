import styled from "@emotion/styled";

export const Wrapper = styled.div<BoxSizing>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    border: 1px solid #ebedef;
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;

export const Like = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
`;

export const Project = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

export const Image = styled.img`
    width: 105px;
    height: 96px;
`;

export const LikeIcon = styled.img`
    width: 20px;
    height: 20px;
`;
