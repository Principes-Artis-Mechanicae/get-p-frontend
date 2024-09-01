import { readPeople, readPeopleById, registerPeopleInfo } from "./people/handlers";
import { readProject } from "./project/handlers";

export const handlers = [readPeople, readPeopleById, registerPeopleInfo, readProject];
