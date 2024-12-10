import { useRef, useState, useEffect, Dispatch, SetStateAction } from "react";

import { projectService } from "@getp/services/project/service";

interface IPortfolio {
    description: string;
    url: string;
}

const useFileUpload = (
    setAttachmentFiles: Dispatch<SetStateAction<IPortfolio[]>>,
    initialPortfolios: IPortfolio[] = [],
) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [portfolios, setPortfolios] = useState<IPortfolio[]>([]);

    useEffect(() => {
        setPortfolios(initialPortfolios);
    }, [initialPortfolios]);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;

        if (selectedFiles) {
            const file: File = selectedFiles[0];

            const formData = new FormData();
            formData.append("file", file);

            try {
                const response = await projectService.portfolioChange(formData);
                if (response && "data" in response) {
                    setPortfolios((prev) => [...prev, { description: file.name, url: response.data.data.fileUri }]);
                    setAttachmentFiles((prev) => [
                        ...prev,
                        { description: file.name, url: response.data.data.fileUri },
                    ]);
                } else {
                    throw new Error("응답에 데이터가 없습니다.");
                }
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                } else {
                    console.error("알 수 없는 오류 발생", error);
                }
            }
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
