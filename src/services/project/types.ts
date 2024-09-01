export interface ApplyProjectRequestBody {
    expectedDuration: {
        startDate: string;
        endDate: string;
    };
    description: string;
    attachmentFiles: string[];
}
