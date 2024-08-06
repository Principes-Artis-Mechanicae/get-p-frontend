import { readPeopleDetail } from "./detail/handlers";
import { readPeople, registerPeopleInfo } from "./people/handlers";

export const handlers = [readPeople, readPeopleDetail, registerPeopleInfo];
