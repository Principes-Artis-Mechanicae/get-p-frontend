import { toast } from "react-toastify";

import { api } from "@getp/apps/config/axios";

import { ExceptionHandler } from "@getp/common/utils/exception";

import { RenderToastFromDerivedError } from "@getp/services/exception";
import { FileUploadResponse } from "@getp/services/storage/types";

export const storageService = {
    uploadFiles: async (file: File) => {
        const request = async () => {
            const formData = new FormData();
            formData.append("file", file);

            const response = await api.post<FileUploadResponse>("/storage/files", formData, {
                headers: { "Content-Type": "multipart/formdata" },
            });

            return new ExceptionHandler.Builder(response)
                .addCase(500, "파일 업로드 중 오류가 발생하였습니다")
                .activate();
        };
        return toast.promise(request, {
            pending: "파일 업로드 중입니다",
            success: "파일 업로드 성공",
            error: RenderToastFromDerivedError,
        });
    },
};
