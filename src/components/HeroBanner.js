import { Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Banner from "../assets/images/banner.png" 



function HeroBanner() {
  return (
   <Box sx={{mt:{lg:"200px",sm:"50px"},ml:{sm:"50px"} }} position="relative">
    <Typography variant="h5" color="red" fontWeight={600}>
        Fitness Club
    </Typography>
    <Typography variant="h3" fontWeight="600" sx={{mt:'30px'}} mb="23px" mt="30px">
        Sweat, Smile <br /> And Repeat
    </Typography>
    <Typography fontSize="25px">
        Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
    <a href="#exercies" style={{marginTop:"20px",textDecoration:"none", width: '200px', textAlign: 'center', background: '#FF2625',padding:'20px',borderRadius:'5px',fontSize:"20px", color:"white"
    
    }}>Explore Exercises</a>
    </Stack>
    
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
      <img src={Banner} alt="hero-banner" className="hero-banner-img" />
   </Box>      
    )
}

export default HeroBanner