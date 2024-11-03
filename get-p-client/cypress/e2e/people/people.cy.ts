describe("사용자는 피플 목록을 조회할 수 있다.", () => {
    it("사용자는 '피플 찾기' 버튼을 눌러 피플 목록 조회 페이지로 이동할 수 있다.", () => {
        cy.visit("/");
        cy.get("span").contains("피플 찾기").click();
        cy.url().should("include", "/people");
    });
});

// describe("사용자는 피플의 상세 정보를 조회할 수 있다.", () => {
//     it("사용자는 피플 카드를 클릭해서 피플 정보 상세 조회 페이지로 이동할 수 있다", () => {
//         cy.visit("/people");
//         cy.get(".css-zs0io3-PeopleListContainer > div:first-child").click();
//         cy.url().should("include", "/people/1");
//     });

//     it("피플 카드의 세부사항이 피플 정보 상세 조회 페이지의 세부사항과 일치한다", () => {
//         cy.visit("/people");

//         cy.get(".css-zs0io3-PeopleListContainer > div:first-child").as("PeopleListContainer");
//         cy.get("@PeopleListContainer").find(".css-udqp1u-PeopleCardContainer").as("PoepleCard");

//         // 피플 카드 닉네임을 변수에 저장
//         cy.get("@PoepleCard")
//             .children("span:nth-of-type(1)")
//             .invoke("text")
//             .then((nickname) => {
//                 cy.wrap(nickname).as("nickname");
//             });

//         // 첫 번째 피플 카드 클릭
//         cy.get("@PeopleListContainer").click();

//         // 상세 페이지에서 닉네임 비교
//         cy.get(".css-3gye04-ProfileContainer > span:first-child")
//             .invoke("text")
//             .then((profileNickname) => {
//                 // 닉네임과 상세 페이지의 닉네임을 비교
//                 cy.get("@nickname").then((nickname) => {
//                     expect(nickname).to.eq(profileNickname);
//                 });
//             });
//     });
// });
