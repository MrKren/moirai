import { Box } from "@mui/system";
import ExampleText from "../ExampleText";

function About() {
  return (
    <Box sx={{
      textAlign: "center"
    }}>
    <h2>About Page</h2>
    <p>This section is about ...</p>
    <ExampleText paras={20}></ExampleText>
    </Box>
  )
}

export default About;