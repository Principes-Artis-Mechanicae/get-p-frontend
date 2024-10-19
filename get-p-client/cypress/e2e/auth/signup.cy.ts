describe("사용자는 회원가입을 할 수 있다", () => {
    beforeEach(() => {
        cy.visit("/auth/signup");
    });

    describe("사용자는 회원타입 버튼을 클릭해 회원 타입을 고를 수 있다", () => {
        it("의뢰자 회원 타입을 선택할 수 있다", () => {
            cy.get("button").contains("의뢰자 회원").click();
            cy.get("button").contains("완료하기").click();
        });

        it("피플 회원 타입을 선택할 수 있다", () => {
            cy.get("button").contains("피플 회원").click();
            cy.get("button").contains("완료하기").click();
        });

        it("회원 타입을 선택하지 않으면 '회원 타입을 선택해주세요' 토스트를 출력한다", () => {
            cy.get("button").contains("완료하기").click();
            cy.get(".Toastify__toast-body")
                .children("div:nth-child(2)")
                .should("have.text", "회원 타입을 선택해주세요!");
        });
    });

    describe("사용자는 이메일을 통해 인증번호를 받을 수 있다", () => {
        it("이미 가입한 사용자에게는 '이미 인증된 이메일이거나 가입된 이메일입니다' 토스트를 출력한다", () => {
            cy.get("button").contains("피플 회원").click();
            cy.get("button").contains("완료하기").click();

            cy.get("#id").type(Cypress.env("PEOPLE_ID") as string);
            cy.get("button").contains("인증").click();

            cy.get(".Toastify__toast-body")
                .children("div:nth-child(2)")
                .should("have.text", "이미 인증된 이메일이거나 가입된 이메일입니다");

            cy.on("uncaught:exception", (err) => {
                expect(err.message).to.include("이미 인증된 이메일이거나 가입된 이메일입니다");
                return false;
            });
        });
    });

    describe("사용자는 회원가입시 비밀번호가 일치해야한다", () => {
        it("비밀번호가 서로 다르면 '비밀번호가 일치하지 않습니다!' 토스트를 출력한다", () => {
            cy.get("button").contains("의뢰자 회원").click();
            cy.get("button").contains("완료하기").click();

            cy.get("#id").type("test@email.com");
            cy.get("#pw").type("qwer1234!");
            cy.get("#pw-verify").type("qwer1234@");

            cy.get("button").contains("다음으로").click();

            cy.get(".Toastify__toast-body")
                .children("div:nth-child(2)")
                .should("have.text", "비밀번호가 일치하지 않습니다!");
        });
    });
});
