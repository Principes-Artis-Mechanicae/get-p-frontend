import { useState, useRef, ChangeEvent } from "react";

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

const EditBtn = styled.label`
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

    cursor: pointer;
`;

const PencilIcon = styled.img`
    color: #8c929c;
`;

const InputFile = styled.input`
    display: none;
`;

export const Profile = () => {
    const [profileImage, setProfileImage] = useState(defaultImg);
    const inputFileRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                const result = reader.result as string;
                setProfileImage(result);
            };

            reader.readAsDataURL(file);
        }
    };
    return (
        <>
            <ProfileContainer>
                <ProfileImage src={profileImage} alt="profile" />
                <EditBtn htmlFor="upload-input">
                    <PencilIcon src={editIcon} alt="edit" />
                </EditBtn>
                <InputFile type="file" id="upload-input" ref={inputFileRef} onChange={handleImageUpload} />
            </ProfileContainer>
        </>
    );
};
