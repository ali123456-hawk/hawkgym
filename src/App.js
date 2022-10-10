import Home from "./pages/Home";
import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import { Box } from "@mui/system"

function App() {
  return (
    
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
     </Routes>
    </Box>
  );
}

export default App;
