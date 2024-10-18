import { useState, useRef, ChangeEvent, useCallback } from "react";
import { useDispatch } from "react-redux";

import { memberService } from "@getp/services/member/service";

import { RootDispatch } from "@getp/store/store";
import { updateProfileThunkAction } from "@getp/store/thunk/auth.thunk";

import defaultImg from "@getp/assets/common/default-profile.svg";
import editIcon from "@getp/assets/common/edit.svg";

import * as Styles from "./index.style";

export const ProfileImageEdit = () => {
    const dispatch: RootDispatch = useDispatch();

    const [profileImage, setProfileImage] = useState(defaultImg);
    const inputFileRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.files && e.target.files.length > 0 && inputFileRef.current && inputFileRef.current.files) {
                const file = e.target.files[0];
                const reader = new FileReader();

                reader.onloadend = () => {
                    const result = reader.result as string;
                    setProfileImage(result);
                };
                reader.readAsDataURL(file);

                memberService.registerProfileImage(inputFileRef.current.files[0]).then(() => {
                    dispatch(updateProfileThunkAction());
                });
            }
        },
        [dispatch],
    );

    return (
        <>
            <Styles.Container>
                <Styles.Image src={profileImage} alt="profile" />
                <Styles.EditBtn htmlFor="upload-input">
                    <Styles.PencilIcon src={editIcon} alt="edit" />
                </Styles.EditBtn>
                <Styles.InputFile
                    type="file"
                    id="profile-imageupload-input"
                    ref={inputFileRef}
                    onChange={handleImageUpload}
                />
            </Styles.Container>
        </>
    );
};
