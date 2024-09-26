import { Text } from "@/components/__common__/typography/Text";

import defulatProfileImage from "@/assets/common/profile.svg";

import { ApplyPeopleId, ApplyPeopleImage, ApplyPeopleInfo, ApplyPeopleItemWrapper } from "./ApplyPeopleItem.style";

export interface ApplyPeopleItemProps {
    id: number;
    profileImage?: string;
    name: string;
    school: string;
    education: string;
}

export const ApplyPeopleItem = ({ id, profileImage, name, school, education }: ApplyPeopleItemProps) => {
    return (
        <ApplyPeopleItemWrapper>
            <ApplyPeopleId>{id}</ApplyPeopleId>
            <ApplyPeopleImage src={profileImage ?? defulatProfileImage} />
            <ApplyPeopleInfo>
                <Text weight="bold">{name}</Text>
                <Text>{school}</Text>
                <Text>{education}</Text>
            </ApplyPeopleInfo>
        </ApplyPeopleItemWrapper>
    );
};
