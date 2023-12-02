<<<<<<< HEAD
import { Box, useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";
import { useTitle } from "components/setTitle";
import { useSelector } from "react-redux";
import UserWidget from "scenes/widgets/UserWidget";
import CreatePost from "scenes/widgets/CreatePost"
import Posts from "scenes/widgets/ShowPosts";

const HomePage=()=>{
    useTitle('binodon – Home')
    const isNonMobileScreens=useMediaQuery('(min-width:1000px)')
    const {_id,picturePath} =useSelector((state)=>state.user)
    return(
        <Box>
            <Navbar/>
            <Box
                width='100%'
                padding='2rem 6%'
                display={isNonMobileScreens?'flex':'block'}
                gap='0.5rem'
                justifyContent='space-between '
            >
                <Box flexBasis={isNonMobileScreens?'26%':undefined}>
                    <UserWidget userId={_id} picturePath={picturePath} />
                </Box>
                <Box
                    flexBasis={isNonMobileScreens?'42%':undefined}
                    mt={isNonMobileScreens?undefined:'2rem'}
                >
                    <CreatePost picturePath={picturePath} />
                    <Posts userId={_id} />
                </Box>
                {isNonMobileScreens && (
                    <Box flexBasis='26%'>

                    </Box>
                )}
            </Box>
        </Box>
    )
}

=======
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
>>>>>>> be4ece29ea09a84ee7ab4d0ef89ac3a3922309b8
export default HomePage;