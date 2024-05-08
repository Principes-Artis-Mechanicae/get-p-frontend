import { useState, useRef } from "react";

import { place_center } from "@/styles/utils";

import editIcon from "../../assets/common/edit.svg";
import defaultImg from "../../assets/common/profile.svg";
import styled from "@emotion/styled";

const ProfileContainer = styled.div`
    ${place_center}
    position: relative;

    width: 124px;
    height: 120px;
`;

const ProfileImage = styled.img`
    width: 120px;
    height: 120px;

    border-radius: 50%;
`;

const EditBtn = styled.button`
    ${place_center}
    position: absolute;
    bottom: 0;
    right: 0;

    width: 40px;
    height: 40px;

    background-color: #fff;

    border: none;
    border-radius: 50%;
    box-shadow: 2px 3px 9px rgba(0, 0, 0, 0.15);
`;

const PencilIcon = styled.img`
    color: #8c929c;
`;

export const Profile = () => {
    return (
        <>
            <ProfileContainer>
                <ProfileImage src={defaultImg} alt="profile" />
                <EditBtn>
                    <PencilIcon src={editIcon} alt="edit" />
                </EditBtn>
            </ProfileContainer>
        </>
    );
};
