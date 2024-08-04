import { HttpResponse, http } from "msw";

import { peopleData } from "./data";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const readPeople = http.get("https://api.princip.es/get-p/v2/people", ({ request }) => {
    const url = new URL(request.url);

    const page = url.searchParams.get("page");
    const size = url.searchParams.get("size");
    const sort = url.searchParams.get("sort");

    if (!page || !size || !sort) return new HttpResponse(null, { status: 404 });

    return HttpResponse.json({
        status: 200,
        data: {
            content: [...peopleData],
            pageInfo: {
                totalPages: Math.floor(peopleData.length / size),
                totalElements: peopleData.length,
                size: peopleData.length,
                number: page,
                numberOfElements: 3,
                first: true,
                last: true,
                empty: false,
                sort: {
                    property: sort.split(",")[0],
                    direction: sort.split(",")[1],
                },
            },
        },
    });
});

export const registerPeopleInfo = http.post(API_BASE_URL + "people/me", async () => {
    return HttpResponse.json({
        status: 201,
        data: {
            peopleId: 1,
        },
    });
});
