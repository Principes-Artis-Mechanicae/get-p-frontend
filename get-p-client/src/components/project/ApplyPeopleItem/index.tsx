import { Text } from "@getp/common/components/typography/Text";

import defulatProfileImage from "@getp/assets/common/default-profile.svg";

import * as Styles from "./index.style";

export interface ApplyPeopleItemProps {
    id: number;
    profileImage?: string;
    name: string;
    school: string;
    education: string;
}

export const ApplyPeopleItem = ({ id, profileImage, name, school, education }: ApplyPeopleItemProps) => {
    return (
        <Styles.ItemWrapper>
            <Styles.Id>{id}</Styles.Id>
            <Styles.Image src={profileImage ?? defulatProfileImage} />
            <Styles.Info>
                <Text weight="bold">{name}</Text>
                <Text>{school}</Text>
                <Text>{education}</Text>
            </Styles.Info>
        </Styles.ItemWrapper>
    );
};
