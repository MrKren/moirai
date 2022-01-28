import { Divider } from "@mui/material";
import ExampleText from "../ExampleText";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Divider />
      <ExampleText paras={5}></ExampleText>
    </div>
  );
}

export default Home;
