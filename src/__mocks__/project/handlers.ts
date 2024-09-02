import { HttpResponse, http } from "msw";

const API_BASE_URL = "https://api.principes.xyz/get-p/v2";

// eslint-disable-next-line @typescript-eslint/require-await
export const readProjectDetail = http.get(API_BASE_URL + `/projects/:id`, async () => {
    return HttpResponse.json({
        status: 200,
        data: {
            peopleId: 1,
            title: "프로젝트 제목",
            payment: 1000000,
            applicationDuration: {
                startDate: "2024-07-01",
                endDate: "2024-07-07",
            },
            estimatedDuration: {
                startDate: "2024-07-14",
                endDate: "2024-07-21",
            },
            description: "프로젝트 설명",
            meetingType: "IN_PERSON",
            category: "BACKEND",
            status: "APPLYING",
            attachmentFiles: ["https://example.com/attachment1", "https://example.com/attachment2"],
            hashtags: ["#해시태그1", "#해시태그2"],
            likesCount: 5,
            client: {
                clientId: 1,
                nickname: "닉네임",
                address: {
                    zipcode: " 41566",
                    street: "대구광역시 북구 대학로 80",
                    detail: "IT대학 융복합관",
                },
            },
        },
    });
});

export const registerProjectLike = http.post(API_BASE_URL + `/projects/:id/likes`, async () => {
    return HttpResponse.json({
        status: 201,
    });
});

export const deleteProjectLike = http.delete(API_BASE_URL + `/projects/:id/likes`, async () => {
    return HttpResponse.json({
        status: 204,
    });
});
