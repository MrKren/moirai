import { Divider, Fab, TextField, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import PreviewIcon from "@mui/icons-material/Preview";
import SaveIcon from "@mui/icons-material/Save";

import CastleIcon from "@mui/icons-material/Castle";
import PersonIcon from "@mui/icons-material/Person";
import LandscapeIcon from "@mui/icons-material/Landscape";
import GroupsIcon from "@mui/icons-material/Groups";
import ChurchIcon from "@mui/icons-material/Church";
import JoinFullIcon from "@mui/icons-material/JoinFull";

import showdown from "showdown";

import { useState } from "react";
import { Link } from "react-scroll";

const inputBox = (props) => {
  return (
    <Box
      sx={{
        width: "90%",
        minWidth: "400px",
      }}
    >
      <TextField
        label="Add markdown here"
        defaultValue={props.textContent}
        fullWidth
        multiline
        minRows={10}
        onChange={(event) => {
          props.setTextContent(event.target.value);
        }}
      />
    </Box>
  );
};

const contentsList = (props) => {
  let contents = props.textContent.split("\n").map((line) => {
    if (line[0] === "#") {
      const title = line.split(" ");
      const level = title[0].length;
      const content = title.slice(1).join(" ");
      return { level: level, content: content };
    }
  });
  contents = contents.filter((e) => e != null);

  return (
    <Box>
      <h2>Contents</h2>
      {contents.map((heading, index) => {
        const id = heading.content.split(" ").join("-");
        console.log(id);
        return (
          <p key={index}>
            <Link to={id} smooth={true}>
              {heading.content}
            </Link>
          </p>
        );
      })}
      <Divider />
    </Box>
  );
};

const outputBox = (props) => {
  const textContent = props.textContent;
  var converter = new showdown.Converter();
  converter.setFlavor("github");
  const html = converter.makeHtml(textContent);

  return (
    <Box sx={{ width: "90%" }}>
      {contentsList({ textContent })}
      <p>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </p>
    </Box>
  );
};

const ContentEditor = () => {
  const [editState, setEditState] = useState(true);
  const [previewState, setPreviewState] = useState(false);
  const [textContent, setTextContent] = useState("");

  const templates = [
    { name: "Settlement", icon: <CastleIcon /> },
    { name: "NPC", icon: <PersonIcon /> },
    { name: "Geographical Feature", icon: <LandscapeIcon /> },
    { name: "Faction", icon: <GroupsIcon /> },
    { name: "Religion", icon: <ChurchIcon /> },
    { name: "Plane of Existence", icon: <JoinFullIcon /> },
  ];

  return (
    <Box>
      <h1>Editor page</h1>
      <Divider />
      <p></p>
      <Box display="flex">
        {editState
          ? inputBox({
              setEditState,
              editState,
              setTextContent,
              textContent,
            })
          : outputBox({ textContent })}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "10%",
            gap: "20px",
            minWidth: "70px",
          }}
        >
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
              {editState ? <SaveIcon /> : <EditIcon />}
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
            <Fab size="small">
              <HelpCenterIcon />
            </Fab>
          </Tooltip>
          <Divider />
          {/* TODO: make templates that trigger using the buttons below */}
          {templates.map((template) => (
            <Tooltip key={template.name} title={template.name}>
              <Fab size="small">{template.icon}</Fab>
            </Tooltip>
          ))}
        </Box>
        {previewState && outputBox({ textContent })}
      </Box>
    </Box>
  );
};

export default ContentEditor;
