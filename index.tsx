import { CustomButton } from "@/components/common/CustomButton";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
export default function TopPage() {
    return (
        <Stack
            sx={{
                margin: "auto",
                marginY: "auto",
                p: 3,
            }}
        >
            <Box component="div" p={10}>
                <Typography
                    color="primary"
                    sx={{
                        textAlign: "center",
                        fontWeight: "bold",
                    }}
                    variant="h4"
                    fontWeight=""
                >
                    にゃーーーーーん
                </Typography>
            </Box>
            <Stack direction="row" justifyContent="center" spacing={5}>
                <Image
                    src="/images/catTumaguro.png"
                    alt="catTumaguro.png"
                    height={300}
                    width={300}
                />
                <Stack alignSelf="center">
                    <CustomButton
                        buttonname="サインイン"
                        href="/signin"
                        primarycolor="#C37349"
                        secondarycolor="#C5956B"
                    />
                    <CustomButton
                        buttonname="サインアップ"
                        href="/signup"
                        primarycolor="#C37349"
                        secondarycolor="#C5956B"
                    />
                </Stack>
            </Stack>
        </Stack>
    );
}
