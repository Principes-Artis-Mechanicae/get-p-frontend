describe("의뢰자는 프로젝트를 의뢰할 수 있다", () => {
    beforeEach(() => {
        cy.visit("/auth/signin");
        cy.get("#id").type(Cypress.env("CLIENT_ID") as string);
        cy.get("#pw").type(Cypress.env("CLIENT_PW") as string);
        cy.get("button").contains("로그인").click();
    });

    it("의뢰자는 프로젝트를 의뢰할 수 있다", () => {
        cy.get("[data-test-id=nav-dropdown-btn]").click();
        cy.get("a").contains("프로젝트 의뢰하기").click();
        cy.get("[data-test-id=nav-dropdown-btn]").click();

        // 사전 미팅 방식 선택
        cy.get("label").contains("온라인").click();

        // 프로젝트 카테고리 선택
        cy.get("[data-test-id=category-dropdown]").click();
        cy.get("[data-test-id=project-category-fe]").click();
        cy.get("[data-test-id=category-dropdown]").click();

        cy.get("[data-test-id=next-btn]").click();

        // 프로젝트 제목 입력
        cy.get("input[placeholder='프로젝트 제목을 입력해주세요']").type("프로젝트 제목");

        // 모집인원 입력
        cy.get("input[placeholder='모집인원을 입력해주세요']").type("1");

        // 프로젝트 설명 입력
        cy.get("textarea").type("프로젝트 설명");

        // 프로젝트 보수금 입력
        cy.get("[data-test-id=project-payment-input]").type("100000");

        // 다음 버튼 클릭
        cy.get("button").contains("다음").click();

        // 지원자 모집 시작일 입력
        cy.get("[data-test-id=project-request-application-start-date]").type("2999-01-01");

        // 지원자 모집 마감일 입력
        cy.get("[data-test-id=project-request-application-end-date]").type("2999-01-10");

        // 예상 작업 시작일 입력
        cy.get("[data-test-id=project-request-estimated-start-date]").type("2999-01-15");

        // 예상 작업 마감일 입력
        cy.get("[data-test-id=project-request-estimated-end-date]").type("2999-02-15");

        // 다음 버튼 클릭
        cy.get("button").contains("다음").click();

        // 프로젝트 태그 입력
        cy.get("input[placeholder='태그를 입력해주세요']").type("태그");

        // 다음 버튼 클릭
        cy.get("button").contains("등록 신청하기").click();
        cy.get("button").contains("메인 페이지로").click();
        cy.url().should("include", "/");
    });
});
