import { Box } from '@mui/system';
import NavBar from '../NavBar';
import PageLoader from '../PageLoader';

function App() {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "row",
    }}>
      <NavBar />
      <PageLoader />
    </Box>
  );
}

export default App;
