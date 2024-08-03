import { HttpResponse, http } from "msw";

import { peopleData } from "./data";

export const readPeople = http.get("https://api.princip.es/get-p/v2/people", ({ request }) => {
    const url = new URL(request.url);

    const pageParam = url.searchParams.get("page");
    const sizeParam = url.searchParams.get("size");
    const sortParam = url.searchParams.get("sort");

    if (!pageParam || !sizeParam || !sortParam) {
        return new HttpResponse(null, { status: 404 });
    }

    const page = parseInt(pageParam, 10);
    const size = parseInt(sizeParam, 10);

    const totalElements = peopleData.length;
    const totalPages = Math.ceil(totalElements / size);
    const start = (page - 1) * size;
    const end = start + size;
    const content = peopleData.slice(start, end);

    console.log(totalElements);

    return HttpResponse.json({
        status: 200,
        data: {
            content: content,
            pageInfo: {
                totalPages: totalPages,
                totalElements: totalElements,
                size: size,
                number: page,
                numberOfElements: content.length,
                first: page === 1,
                last: page === totalPages,
                empty: content.length === 0,
                sort: {
                    property: sortParam.split(",")[0],
                    direction: sortParam.split(",")[1],
                },
            },
        },
    });
});
