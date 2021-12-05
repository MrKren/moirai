import { Box } from '@mui/system';
import NavBar from '../NavBar';
import Content from '../Content';

function App() {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "row",
    }}>
      <NavBar></NavBar>
      <Content></Content>
    </Box>
  );
}

export default App;
