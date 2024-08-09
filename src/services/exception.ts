export class RefreshTokenExpiredException extends Error {
    constructor() {
        super("Refresh Token 이 만료 되었습니다. 다시 로그인해주세요");
    }
}

/**
 * 상위에서 throw 한 Error 인스턴스의 메시지를 toast 에 출력합니다
 */
export const RenderToastFromDerivedError = {
    render: ({ data }: { data: { message: string } }) => {
        return data.message;
    },
};
