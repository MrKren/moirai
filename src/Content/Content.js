import { Divider, Fab, TextField } from "@mui/material";
import { Box } from "@mui/system";
import EditIcon from '@mui/icons-material/Edit';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

import { useState } from 'react';

const inputBox = (props) => {
    return (
            <Box sx={{width: "90%"}}>
                <TextField
                    label="Add markdown here"
                    defaultValue={props.textContent}
                    fullWidth
                    multiline
                    minRows={20}
                    onChange={(event) => {
                        props.setTextContent(event.target.value);
                    }}
                />
            </Box>
    )
}

const outputBox = (props) => {
    const textContent = `<p>${props.textContent}</p>`
    return (
        <Box sx={{width: "90%"}}>
            <p>
                <div dangerouslySetInnerHTML={{ __html: textContent}}></div>
            </p>
        </Box>
    )
}

const Content = () => {
    const [editState, setEditState] = useState(true);
    const [textContent, setTextContent] = useState("");

    return (
        <Box>
            <h1>Example Page</h1>
            <Divider />
            <p></p>
            <Box display="flex">
                {editState ?
                    inputBox({
                        setEditState,
                        editState,
                        setTextContent,
                        textContent})
                    : outputBox({textContent})}
                <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "10%",
                        gap: "20px"
                    }}>
                    <Fab
                        size="small"
                        onClick={() => {
                            setEditState(!editState)
                        }}
                    >
                        <EditIcon/>
                    </Fab>
                    <Fab size="small">
                        <HelpCenterIcon/>
                    </Fab>
                    <Divider/>
                    {/* TODO: make templates that trigger using the buttons below */}
                    <Fab size="small" />
                    <Fab size="small" />
                    <Fab size="small" />
                    <Fab size="small" />
                </Box>
            </Box>
        </Box>
    )
}

export default Content;