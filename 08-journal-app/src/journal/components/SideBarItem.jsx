import { useMemo } from "react";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";
import { TurnedInNot } from "@mui/icons-material";
import {
    Grid2,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { setActiveNote } from "../../store/journal";

export const SideBarItem = ({ title, body, id, date, imageUrls = [] }) => {
    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch(setActiveNote({ title, body, id, date, imageUrls }));
    };

    const newTitle = useMemo(() => {
        return title.length > 17 ? `${title.substring(0, 17)}...` : title;
    }, [title]);

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClickNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid2 container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={body} />
                </Grid2>
            </ListItemButton>
        </ListItem>
    );
};

SideBarItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    imageUrls: PropTypes.arrayOf(PropTypes.string),
};
