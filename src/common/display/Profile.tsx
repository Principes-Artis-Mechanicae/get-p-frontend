import { useState, useRef, ChangeEvent } from "react";

import { memberService } from "@/services/member/member.service";

import editIcon from "@/assets/common/edit.svg";
import defaultImg from "@/assets/common/profile.svg";

import { EditBtn, InputFile, PencilIcon, ProfileContainer, ProfileImage } from "./Profile.style";

export const Profile = () => {
    const [profileImage, setProfileImage] = useState(defaultImg);
    const inputFileRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0 && inputFileRef.current && inputFileRef.current.files) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                const result = reader.result as string;
                setProfileImage(result);
            };
            reader.readAsDataURL(file);

            await memberService.registerProfileImage(inputFileRef.current.files[0]);
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
