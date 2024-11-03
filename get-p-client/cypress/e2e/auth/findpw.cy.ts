describe("사용자는 비밀번호 찾기를 할 수 있다", () => {
    it("로그인 페이지에서 '비밀번호 찾기' 링크를 통해 비밀번호 찾기 페이지로 이동할 수 있다", () => {
        cy.visit("/auth/signin");
        cy.get("button").contains("비밀번호 찾기").click();

        cy.url().should("include", "/auth/findpw");
    });
});
