import { Divider, Fab, TextField, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import EditIcon from '@mui/icons-material/Edit';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import PreviewIcon from '@mui/icons-material/Preview';
import SaveIcon from '@mui/icons-material/Save';

import CastleIcon from '@mui/icons-material/Castle';
import PersonIcon from '@mui/icons-material/Person';
import LandscapeIcon from '@mui/icons-material/Landscape';
import GroupsIcon from '@mui/icons-material/Groups';
import ChurchIcon from '@mui/icons-material/Church';
import JoinFullIcon from '@mui/icons-material/JoinFull';

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
                    minRows={25}
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

    const templates = [
        {name: "Settlement", icon: <CastleIcon/>},
        {name: "NPC", icon: <PersonIcon/>},
        {name: "Geographical Feature", icon: <LandscapeIcon/>},
        {name: "Faction", icon: <GroupsIcon/>},
        {name: "Religion", icon: <ChurchIcon/>},
        {name: "Plane of Existence", icon: <JoinFullIcon/>},
    ]

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
                    <Tooltip title={editState ? "Save" : "Edit"}>
                        <Fab
                            size="small"
                            onClick={() => {
                                if (editState) {
                                    setPreviewState(false);
                                }
                                setEditState(!editState);
                            }}
                        >
                            {editState ? <SaveIcon/> : <EditIcon/>}
                        </Fab>
                    </Tooltip>
                    <Tooltip title="Live Preview">
                        <Fab
                            size="small"
                            onClick={() => {
                                setPreviewState(!previewState);
                            }}
                        >
                            <PreviewIcon />
                        </Fab>
                    </Tooltip>
                    <Tooltip title="Help">
                        <Fab 
                            size="small"
                        >
                            <HelpCenterIcon/>
                        </Fab>
                    </Tooltip>
                    <Divider/>
                    {/* TODO: make templates that trigger using the buttons below */}
                    {templates.map(template => (
                        <Tooltip key={template.name} title={template.name}>
                            <Fab size="small">{template.icon}</Fab>
                        </Tooltip>
                    ))}
                </Box>
                {previewState && outputBox({textContent})}
            </Box>
        </Box>
    )
}

export default ContentEditor;