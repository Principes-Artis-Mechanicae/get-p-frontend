import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;

    width: 200px;
    height: 100px;

    border-radius: 10px;
    border: 1px solid #ebedef;
    padding: 12px;

    background: #fff;

    &:hover {
        cursor: pointer;
    }
`;

export const Contianer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;

    height: 100%;
`;

export const ProfileImg = styled.img`
    display: block;
    width: 50px;
    height: 50px;

    border-radius: 15px;
`;

export const LikesInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    margin: 4px 0px;

    span {
        margin: 0px 4px;
    }
`;

export const LikesIcon = styled.img`
    width: 20px;
    height: 20px;

    object-fit: contain;
`;

export const Item = styled.div`
    display: flex;

    span {
        flex-shrink: 0;

        display: block;

        margin: 0px 4px;
    }
    span:last-child {
        flex-shrink: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
export const HashTagContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 4px;

    height: 20px;

    overflow: hidden;
`;

export const Name = styled.div`
    margin: 2px 4px;
`;

export const HashTag = styled.p`
    flex-shrink: 0;

    background-color: #41c3bd;
    color: #fff;

    border-radius: 6px;
    padding: 0px 6px;
`;

// 스켈레톤 스타일 컴포넌트 정의
export const SkeletonText = styled.div<{ width: SizeProp; height: SizeProp }>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 4px;
    animation: skeleton-loading 1.5s infinite ease-in-out;
`;

export const ProfileImgSkeleton = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 15px;
    animation: skeleton-loading 1.5s infinite ease-in-out;
`;

export const LikesInfoSkeleton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 4px 0px;
    span {
        margin: 0px 4px;
    }
`;

export const LikesIconSkeleton = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    animation: skeleton-loading 1.5s infinite ease-in-out;
`;

export const ItemSkeleton = styled.div`
    display: flex;
    span {
        flex-shrink: 0;
        display: block;
        margin: 0px 4px;
    }
`;

export const NameSkeleton = styled.div`
    margin: 2px 4px;
`;

export const HashTagContainerSkeleton = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 4px;
    height: 20px;
    overflow: hidden;
`;

export const HashTagSkeleton = styled.div`
    flex-shrink: 0;
    border-radius: 6px;
    padding: 0px 6px;
    height: 12px;
    animation: skeleton-loading 1.5s infinite ease-in-out;
`;
