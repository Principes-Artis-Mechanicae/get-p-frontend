import { HttpResponse, http } from "msw";

import { peopleData } from "./data";

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
