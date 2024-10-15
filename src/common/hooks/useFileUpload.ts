import { useRef, useState, Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

import { PortfolioUploadResponseBody } from "@/services/project/types";

import { api } from "@/config/axios";

interface IPortfolio {
    description: string;
    url: string;
}

const useFileUpload = (setAttachmentFiles: Dispatch<SetStateAction<IPortfolio[]>>) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [portfolios, setPortfolios] = useState<IPortfolio[]>([]);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;

        if (selectedFiles) {
            const file: File = selectedFiles[0];

            const formData = new FormData();
            formData.append("file", file);

            const request = async () => {
                const response = await api.post<PortfolioUploadResponseBody>("/storage/files", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                if (response.status !== 201) throw new Error("포트폴리오 파일 업로드 실패");
                setPortfolios((prev) => [...prev, { description: file.name, url: response.data.data.fileUri }]);
                setAttachmentFiles((prev) => [...prev, { description: file.name, url: response.data.data.fileUri }]);
            };

            return toast.promise(request, {
                pending: "포트폴리오 업로드 중입니다",
                success: "포트폴리오 업로드 완료",
                error: "포트폴리오 업로드 실패",
            });
        }
    };

    const handleDelete = (url: string) => {
        setPortfolios((prevFiles) => {
            const updatedFiles = prevFiles.filter((file) => file.url !== url);
            setAttachmentFiles(updatedFiles);
            return updatedFiles;
        });
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return {
        fileInputRef,
        portfolios,
        handleFileChange,
        handleDelete,
        handleButtonClick,
    };
};

export default useFileUpload;
