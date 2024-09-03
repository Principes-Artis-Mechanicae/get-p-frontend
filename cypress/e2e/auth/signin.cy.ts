describe("사용자는 로그인을 할 수 있다", () => {
    it("사용자는 아이디와 비밀번호를 입력하면 로그인을 할 수 있다", () => {
        cy.visit("/");
        cy.contains("로그인").click();

        cy.url().should("include", "/auth/signin");

        cy.get("#id").type("toothless042@gmail.com");
        cy.get("#pw").type("qwer1234!");

        cy.get("button").contains("로그인").click();
    });
});
