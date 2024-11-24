import { BaseResponse } from "@getp/services/types";

export type FileUploadResponse = BaseResponse<{
    fileUrl: string;
}>;
