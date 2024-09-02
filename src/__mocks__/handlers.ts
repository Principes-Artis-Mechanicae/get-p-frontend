import { readPeople, readPeopleById, registerPeopleInfo } from "./people/handlers";
import { deleteProjectLike, readProjectDetail, registerProjectLike } from "./project/handlers";

export const handlers = [
    readPeople,
    readPeopleById,
    registerPeopleInfo,
    readProjectDetail,
    registerProjectLike,
    deleteProjectLike,
];
