import { Task } from "@/types/schema";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";
import { CustomDate } from "../common/CustomDate";

export default function TodoView({ tasks }: { tasks: Task[] }) {
    const finishTask = async (id: string) => {
        const jwt = localStorage.getItem("jwt");
        try {
            const response = await axios.put(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/task/finish/${id}`,
                { headers: { Authorization: `Bearer ${jwt}` } }
            );
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <List
            sx={{
                width: "100%",
                maxWidth: 600,
                bgcolor: "background.paper",
                maxHeight: "200px",
                overflow: "auto",
            }}
        >
            {tasks.map(({ id, title, comment, dead_line, finished_at }) => {
                return (
                    <ListItem key={id} disablePadding>
                        <ListItemButton
                            onClick={() => finishTask(id)}
                            role={undefined}
                            dense
                        >
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    defaultChecked={finished_at != undefined}
                                    tabIndex={-1}
                                    disableRipple
                                />
                            </ListItemIcon>
                            <ListItemText id={id} primary={title} />
                        </ListItemButton>
                        <CustomDate dateString={dead_line} />
                    </ListItem>
                );
            })}
        </List>
    );
}
