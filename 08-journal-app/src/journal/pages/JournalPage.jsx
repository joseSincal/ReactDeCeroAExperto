import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
    return (
        <JournalLayout>
            {/* <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                accusamus ipsum, consectetur obcaecati in illum vero corporis
                expedita assumenda? Sit labore culpa nemo ipsum consequatur
                totam eum iusto dignissimos. Mollitia?
            </Typography> */}

            <NothingSelectedView />
            {/* <NoteView /> */}

            <IconButton
                size="large"
                sx={{
                    color: "white",
                    backgroundColor: "error.main",
                    ":hover": { backgroundColor: "error.main", opacity: 0.9 },
                    position: "fixed",
                    right: 50,
                    bottom: 50,
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </JournalLayout>
    );
};
