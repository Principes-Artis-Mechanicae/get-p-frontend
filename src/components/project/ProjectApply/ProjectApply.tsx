import { Button } from "principes-getp";

import { StarIcon } from "@/assets/project/StarIcon";

import { ProjectApplyContainer, StarButton } from "./ProjectApply.style";

export interface ProjectApplyProps {
    isActive: boolean;
    handleLikeBtnClick: React.MouseEventHandler;
    handleApplyBtnClick: React.MouseEventHandler;
}

export const ProjectApply = ({ isActive, handleLikeBtnClick, handleApplyBtnClick }: ProjectApplyProps) => {
    return (
        <ProjectApplyContainer>
            <Button width="100%" height="54px" variant="outline" onClick={handleApplyBtnClick}>
                지원하기
            </Button>
            <StarButton isActive={isActive} onClick={handleLikeBtnClick}>
                <StarIcon isActive={isActive} />
            </StarButton>
        </ProjectApplyContainer>
    );
};
