import { api } from "@/config/axios";

import { ReadPeopleResponseBody } from "./people.types";

export const peopleService = {
    readPeople: async (page = 0, size = 10, sort = "peopleId,desc") => {
        const response = await api.get<ReadPeopleResponseBody>(`/people?page=${page}&size=${size}&sort=${sort}`);
        console.log(response.data.data);
        return response.data.data;
    },
};
