import { Modal, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { CustomButton } from "../common/CustomButton";

export const AddSchedule = ({ refetch }: { refetch: () => Promise<void> }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scheduleName, setScheduleName] = useState("");
    const [startTime, setStartTime] = useState<Date | null>(new Date());
    const [endTime, setEndTime] = useState<Date | null>(new Date());
    const sendAddSchedule = async () => {
        if (scheduleName === "") {
            return;
        }
        const jwt = localStorage.getItem("jwt");
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/schedule/add`,
                {
                    title: scheduleName,
                    start: startTime,
                    end: endTime,
                    comment: "",
                },
                { headers: { Authorization: `Bearer ${jwt}` } }
            );
            refetch();
            setIsOpen(false);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <CustomButton
                onclick={() => setIsOpen(!isOpen)}
                primarycolor="#C5956B"
                secondarycolor="#C37349"
                buttonname="SCHEDULE"
            />
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Paper
                    sx={{
                        height: "40%",
                        width: "50vw",
                        minWidth: "300px",
                        margin: "auto",
                        minHeight: "500px",
                    }}
                >
                    <Stack
                        sx={{
                            position: "relative",
                        }}
                        spacing={3}
                        p={2}
                    >
                        <Typography variant="h6">Scheduleを追加</Typography>
                    </Stack>
                </Paper>
            </Modal>
        </>
    );
};
