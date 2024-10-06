import { mobile } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export interface IStarIcon {
    isClicked: boolean;
}

export const ProjectDetailWrapper = styled.section`
    width: min(100%, 1100px);

    margin: 40px auto;

    display: flex;
    gap: 50px;

    ${mobile} {
        flex-direction: column;
        align-items: center;
    }
`;

export const ProjectDetailSideContainer = styled.div`
    width: 30%;

    display: flex;
    flex-direction: column;
    gap: 30px;

    ${mobile} {
        width: 100%;
    }
    position: relative;
    z-index: 101;
`;

export const ProjectDetailContainer = styled.div`
    width: 70%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 40px;

    ${mobile} {
        width: 100%;
    }
`;

export const ProjectDetailItem = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 20px;

    position: relative;
    z-index: 100;

    /* margin-bottom: 20px; */
`;

export const Textbox = styled.p`
    width: 100%;
    height: 300px;

    overflow: scroll;

    font-size: 16px;

    border-bottom: 1px solid #ebedef;
    padding: 20px;
`;

export const DateContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const DateItem = styled.div`
    width: 30%;

    display: flex;
    flex-direction: column;

    gap: 20px;
`;

export const DateBox = styled.span`
    width: 100%;

    padding: 20px;
    border-bottom: 1px solid #ebedef;
`;

export const FileContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;
`;

export const File = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid #ebedef;
    padding: 20px;
`;

export const DownloadIcon = styled.img`
    width: 28px;
    height: 24px;

    cursor: pointer;
`;

export const BlurBox = styled.div`
    width: 100%;

    /* background-color: pink; */
    /* background-color: rgba(255, 255, 255, 0.7); */
    /* backdrop-filter: blur(4px); */
    /* position: absolute; */
    top: 100%;
    z-index: 103;
`;
