describe("사용자는 피플 목록을 조회할 수 있다.", () => {
    it("사용자는 '피플 찾기' 버튼을 눌러 피플 목록 조회 페이지로 이동할 수 있다.", () => {
        cy.visit("/");
        cy.get("span").contains("피플 찾기").click();
        cy.url().should("include", "/people");
    });
});

describe("사용자는 피플의 상세 정보를 조회할 수 있다.", () => {
    it("사용자는 피플 카드를 클릭해서 피플 정보 상세 조회 페이지로 이동할 수 있다", () => {
        cy.visit("/people");
        cy.get(".css-zs0io3-PeopleListContainer > div:first-child").click();
        cy.url().should("include", "/people/1");
    });
});
