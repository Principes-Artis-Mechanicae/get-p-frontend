import { Text } from "get-p-design";

import likeIcon from "@getp/assets/people/like.png";
import buildingIcon from "@getp/assets/project/building.png";
import locationIcon from "@getp/assets/project/location.png";

import * as Styles from "./index.style";
import { SerializedStyles } from "@emotion/react";

export interface ProjectManagementProps {
    clientAddress: {
        detail: string;
        street: string;
    };
    likesCount: number;
    additionalStyles?: SerializedStyles;
}

export const ProjectManagement = ({ clientAddress, likesCount, additionalStyles }: ProjectManagementProps) => {
    console.log(clientAddress);
    return (
        <Styles.Wrapper additionalStyles={additionalStyles}>
            <Styles.Container>
                <Styles.Item>
                    <Styles.Icon src={buildingIcon}></Styles.Icon>
                    <Text size="m" color="secondary" weight="normal">
                        {clientAddress.detail}
                    </Text>
                </Styles.Item>

                <Styles.Item>
                    <Styles.Icon src={likeIcon}></Styles.Icon>
                    <Text size="m" color="secondary" weight="normal">
                        {likesCount}
                    </Text>
                </Styles.Item>
            </Styles.Container>

            <Styles.Item>
                <Styles.Icon src={locationIcon}></Styles.Icon>
                <Text size="m" color="secondary" weight="normal">
                    {clientAddress.street}
                </Text>
            </Styles.Item>
        </Styles.Wrapper>
    );
};
