import styled from "@emotion/styled";

export interface IProfileWrapper {
    width: string;
    height: string;
}

export const ProfileWrapper = styled.div<IProfileWrapper>`
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

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;

export const ProfileLike = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
`;

export const ProfileProject = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

export const ProfileImg = styled.img`
    width: 105px;
    height: 96px;
`;

export const LikeIcon = styled.img`
    width: 20px;
    height: 20px;
`;
