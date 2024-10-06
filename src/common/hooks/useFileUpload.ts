import { useRef, useState } from "react";

import { useProjectApply } from "@/services/project/useProjectApply";

interface IFile {
    name: string;
    url: string;
}

const useFileUpload = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [portfolios, setPortfolios] = useState<IFile[]>([]);
    const { setAttachmentFiles } = useProjectApply();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (selectedFiles) {
            const newFiles = Array.from(selectedFiles).map((file) => ({
                name: file.name,
                url: URL.createObjectURL(file),
            }));

            setPortfolios((prevFiles) => {
                const updatedFiles = [...prevFiles, ...newFiles];
                setAttachmentFiles(updatedFiles.map((file) => file.name));
                return updatedFiles;
            });
        }
    };

    const handleDelete = (url: string) => {
        setPortfolios((prevFiles) => {
            const updatedFiles = prevFiles.filter((file) => file.url !== url);
            setAttachmentFiles(updatedFiles.map((file) => file.name));
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
