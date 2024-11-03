import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { Button, DropDown, DropDownContextProvider, DropDownItem, RadioGroup, RadioItem } from "get-p-design";
import { Title } from "get-p-design";
import { Paragraph } from "get-p-design";

import { ProjectRequestPageWrapper } from "@getp/pages/project/ProjectRequest/ProjectRequestPage.style";

import { useProjectRequest } from "@getp/services/project/useProjectRequest";

import { projectAction } from "@getp/store/slice/project.slice";
import { RootDispatch } from "@getp/store/store";

import { PostProjectRequestContianer } from "./PostProjectRequestSection.style";

export const PostProjectRequestSection = () => {
    const dispatch: RootDispatch = useDispatch();

    const { isPostProjectInputValid } = useProjectRequest();

    const handleOnlineMeeting = useCallback(() => {
        dispatch(projectAction.setMeetingType("REMOTE"));
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
                            dispatch(projectAction.setCategory(selected.value));
                        }}
                    >
                        <DropDownItem index={1} value={"프론트엔드 개발"} />
                        <DropDownItem index={2} value={"백엔드 개발"} />
                        <DropDownItem index={3} value={"앱 개발"} />
                        <DropDownItem index={4} value={"프로그램 개발"} />
                        <DropDownItem index={5} value={"기타"} />
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
