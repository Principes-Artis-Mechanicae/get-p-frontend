export interface INavItem {
    key: number;
    text: string | React.ReactElement;
    to: string;
}

export const navItems: INavItem[] = [
    {
        key: 1,
        text: "프로젝트 찾기",
        to: "/",
    },
    {
        key: 2,
        text: "피플 찾기",
        to: "/",
    },
    {
        key: 3,
        text: "이용 가이드",
        to: "/",
    },
];
