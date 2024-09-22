import { HttpResponse, http } from "msw";

const API_BASE_URL = "https://api.principes.xyz/get-p/v2";

export const requestMeeting = http.post(API_BASE_URL + `/projects/:id/meetings`, async ({ params }) => {
    const { id } = params;

    return HttpResponse.json({
        status: 201,
        data: {
            meetingId: id,
        },
    });
});
