import { requestMeeting } from "./client/handlers";
import { readClientProject } from "./client/handlers";
import { readPeople, readPeopleById, registerPeopleInfo } from "./people/handlers";

export const handlers = [requestMeeting, readPeople, readPeopleById, registerPeopleInfo, readClientProject];
