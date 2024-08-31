import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { Button, DropDown, DropDownContextProvider, DropDownItem, RadioGroup, RadioItem } from "principes-getp";

import { ProjectRequestPageWrapper } from "@/pages/project/ProjectRequestPage.style";

import { useProjectRequest } from "@/services/project/useProjectRequest";

import { Paragraph } from "../../__common__/typography/Paragraph";
import { Title } from "../../__common__/typography/Title";
import { PostProjectRequestContianer } from "./PostProjectRequestSection.style";
import { projectAction } from "@/store/slice/project.slice";
import { RootDispatch } from "@/store/store";

export const PostProjectRequestSection = () => {
    const dispatch: RootDispatch = useDispatch();

    const { isPostProjectInputValid } = useProjectRequest();

    const handleOnlineMeeting = useCallback(() => {
        // 온라인 미팅 타입 필요
        dispatch(projectAction.setMeetingType(""));
    }, [dispatch]);

    const handleOfflineMeeting = useCallback(() => {
        dispatch(projectAction.setMeetingType("IN_PERSON"));
    }, [dispatch]);

    const handleNextBtnClick = useCallback(() => {
        if (!isPostProjectInputValid) {
            toast.error("아직 입력하지 않은 항목이 존재합니다");
            return;
        }
        dispatch(projectAction.nextStep());
    }, [isPostProjectInputValid, dispatch]);

    return (
        <ProjectRequestPageWrapper>
            <Title>프로젝트 의뢰</Title>

            <PostProjectRequestContianer>
                <Paragraph weight="bold" size="m">
                    사전미팅 방식을 선택해주세요
                </Paragraph>

                <RadioGroup width="100%" height="auto">
                    <RadioItem name="meeting-type" onClick={handleOnlineMeeting}>
                        온라인 미팅
                    </RadioItem>
                    <RadioItem name="meeting-type" onClick={handleOfflineMeeting}>
                        오프라인 미팅
                    </RadioItem>
                </RadioGroup>
            </PostProjectRequestContianer>

            <PostProjectRequestContianer>
                <Paragraph weight="bold" size="m">
                    프로젝트 카테고리를 선택해주세요
                </Paragraph>

                <DropDownContextProvider>
                    <DropDown
                        width="100%"
                        height="54px"
                        itemContainerHeight="200px"
                        placeholder="카테고리를 선택해주세요"
                        onValueChange={(selected) => {
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
                            dispatch(projectAction.setCategory(selected.value));
                        }}
                    >
                        <DropDownItem index={1} value={"프론트엔드 개발"} />
                        <DropDownItem index={2} value={"백엔드 개발"} />
                        <DropDownItem index={3} value={"앱 개발"} />
                        <DropDownItem index={4} value={"프로그램 개발"} />
                    </DropDown>
                </DropDownContextProvider>
            </PostProjectRequestContianer>

            <Button
                variant={isPostProjectInputValid ? "primary" : "disabled"}
                width="100%"
                height="54px"
                onClick={handleNextBtnClick}
            >
                다음으로
            </Button>
        </ProjectRequestPageWrapper>
    );
};
