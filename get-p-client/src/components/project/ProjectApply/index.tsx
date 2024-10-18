import { Button } from "principes-getp";

import { StarIcon } from "@getp/assets/project/StarIcon";

import * as Styles from "./index.style";

export interface ProjectApplyProps {
    isActive: boolean;
    handleLikeBtnClick?: React.MouseEventHandler;
    handleApplyBtnClick?: React.MouseEventHandler;
}

export const ProjectApply = ({ isActive, handleLikeBtnClick, handleApplyBtnClick }: ProjectApplyProps) => {
    return (
        <Styles.Container>
            <Button width="100%" height="54px" variant="outline" onClick={handleApplyBtnClick}>
                지원하기
            </Button>
            <Styles.StarButton isActive={isActive} onClick={handleLikeBtnClick}>
                <StarIcon isActive={isActive} />
            </Styles.StarButton>
        </Styles.Container>
    );
};
