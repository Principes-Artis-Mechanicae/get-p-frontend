export interface INavItem {
    key: number;
    text: string;
    to: string;
}

export const navItems: INavItem[] = [
    {
        key: 1,
        text: "프로젝트 찾기",
        to: "/project",
    },
    {
        key: 2,
        text: "피플 찾기",
        to: "/people?page=1&size=10&sort=peopleId,desc",
    },
    {
        key: 3,
        text: "이용 가이드",
        to: "/guide",
    },
];
