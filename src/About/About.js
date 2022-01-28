import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import ExampleText from "../ExampleText";

function About() {
  return (
    <Box>
      <h1>About Page</h1>
      <Divider />
      <p>This section is about ...</p>
      <ExampleText paras={20}></ExampleText>
    </Box>
  );
}

export default About;
