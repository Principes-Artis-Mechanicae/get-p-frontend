import { useParams } from "react-router-dom";

import { HttpResponse, http } from "msw";

import { peopleDetailData } from "./data";

export const readPeopleDetail = http.get("https://api.princip.es/get-p/v2/people/1", ({ request }) => {
    // const url = new URL(request.url);
    // const pathParts = url.pathname.split("/");
    // const peopleId = pathParts[pathParts.length - 1];

    // if (!peopleId) return new HttpResponse(null, { status: 404 });

    return HttpResponse.json({
        status: 200,
        data: peopleDetailData,
    });
});
