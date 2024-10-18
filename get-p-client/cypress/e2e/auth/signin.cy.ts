describe("사용자는 로그인을 할 수 있다", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.contains("로그인").click();

        cy.url().should("include", "/auth/signin");
    });

    it("피플 사용자는 아이디와 비밀번호를 입력하면 로그인을 할 수 있다", () => {
        cy.get("#id").type(Cypress.env("PEOPLE_ID") as string);
        cy.get("#pw").type(Cypress.env("PEOPLE_PW") as string);

        cy.get("button").contains("로그인").click();
    });

    it("의뢰자 사용자는 아이디와 비밀번호를 입력하면 로그인을 할 수 있다", () => {
        cy.get("#id").type(Cypress.env("CLIENT_ID") as string);
        cy.get("#pw").type(Cypress.env("CLIENT_PW") as string);

        cy.get("button").contains("로그인").click();
    });

    it("아이디와 비밀번호가 올바르지 않을시 에러 토스트를 출력한다", () => {
        cy.get("#id").type("not_registered");
        cy.get("#pw").type("not_registered");

        cy.get("button").contains("로그인").click();

        cy.on("uncaught:exception", (err) => {
            expect(err.message).to.include("아이디 혹은 비밀번호가 일치하지 않습니다");
            return false;
        });
    });
});
