import { Box } from "@mui/material";
import Navbar from "scenes/navbar";
import { useTitle } from "components/setTitle";

const HomePage=()=>{
    useTitle('binodon – Home')
    return(
    <Box>
        <Navbar/>
    </Box>)
}
export default HomePage;