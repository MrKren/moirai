import { Divider, Fab, TextField } from "@mui/material";
import { Box } from "@mui/system";
import EditIcon from '@mui/icons-material/Edit';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import PreviewIcon from '@mui/icons-material/Preview';
import showdown from 'showdown'

import { useState } from 'react';

const inputBox = (props) => {
    return (
            <Box sx={{
                    width: "90%",
                    minWidth: "400px",
                }}>
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
    var converter = new showdown.Converter();
    const html = converter.makeHtml(props.textContent)
    return (
        <Box sx={{width: "90%"}}>
            <p>
                <div dangerouslySetInnerHTML={{ __html: html}}></div>
            </p>
        </Box>
    )
}

const ContentEditor = () => {
    const [editState, setEditState] = useState(true);
    const [previewState, setPreviewState] = useState(false);
    const [textContent, setTextContent] = useState("");

    return (
        <Box>
            <h1>Editor page</h1>
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
                        gap: "20px",
                        minWidth: "70px",
                    }}>
                    <Fab
                        size="small"
                        onClick={() => {
                            if (editState) {
                                setPreviewState(false);
                            }
                            setEditState(!editState);
                        }}
                    >
                        <EditIcon/>
                    </Fab>
                    <Fab
                        size="small"
                        onClick={() => {
                            setPreviewState(!previewState);
                        }}
                    >
                        <PreviewIcon />
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
                    <Fab size="small" />
                </Box>
                {previewState && outputBox({textContent})}
            </Box>
        </Box>
    )
}

export default ContentEditor;