import { useNavigate } from "react-router-dom";

import { Button } from "get-p-design";
import { Title } from "get-p-design";
import { Paragraph } from "get-p-design";

import notFoundImg from "@getp/assets/home/not_found.svg";

import { NotFoundImg, NotFoundPageWrapper } from "./NotFoundPage.style";
import { css } from "@emotion/react";

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <NotFoundPageWrapper>
            <NotFoundImg src={notFoundImg} />
            <Title>죄송합니다,</Title>
            <Title>요청하신 페이지를 찾을 수 없습니다.</Title>
            <Paragraph>다시 시도하시거나 홈으로 돌아가세요</Paragraph>

            <Button
                variant="primary"
                width="min(100%, 400px)"
                height="54px"
                css={css`
                    margin: 20px auto;
                `}
                onClick={() => navigate("/")}
            >
                홈으로 돌아가기
            </Button>
        </NotFoundPageWrapper>
    );
}
