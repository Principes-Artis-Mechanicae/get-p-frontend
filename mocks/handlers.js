import { HttpResponse, http } from "msw";

export const handlers = [
    http.get("https://api.princip.es/get-p/v2/", () => {
        return HttpResponse.json({
            data: "msw response!",
        });
    }),
];
