import { useCallback, useState, useRef } from "react";
import { useParams } from "react-router-dom";

import { clientService } from "./service";
import { useMutation } from "@tanstack/react-query";

export const useRequestMeeting = () => {
    const { id } = useParams();

    const [meetingDate, setMeetingDate] = useState<string>("");
    const [startTime, setStartTime] = useState<string>("");
    const [endTime, setEndTime] = useState<string>("");

    const projectNameRef = useRef<HTMLTextAreaElement | null>(null);
    const locationRef = useRef<HTMLTextAreaElement | null>(null);
    const phoneNumberRef = useRef<HTMLTextAreaElement | null>(null);
    const requestRef = useRef<HTMLTextAreaElement | null>(null);

    const { mutate } = useMutation({
        mutationFn: () =>
            clientService.requestMeeting({
                applicantId: Number(id),
                location: locationRef.current?.value as string,
                schedule: {
                    date: meetingDate,
                    startTime: startTime,
                    endTime: endTime,
                },
                phoneNumber: phoneNumberRef.current?.value as string,
                description: requestRef.current?.value as string,
            }),
    });

    const handleTransmissionBtnClicked = useCallback(() => {
        mutate();
    }, [mutate]);

    return {
        setMeetingDate,
        setStartTime,
        setEndTime,
        projectNameRef,
        locationRef,
        phoneNumberRef,
        requestRef,
        handleTransmissionBtnClicked,
    };
};
