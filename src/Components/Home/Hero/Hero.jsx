import React from "react";
// import { alpha, useTheme } from "@mui/material/styles";
import { createTheme, ThemeProvider } from '@mui/material';
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Image from 'mui-image';
import image1 from "./Images/MS.png";

const Hero = () => {
    
    const theme = createTheme({
        typography: {
          fontFamily: [
            'Quicksand', 'sans-serif',  
          ].join(','),
        },});
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  console.log('here',image1)
  return (
    <ThemeProvider theme={theme}>
    <Grid container spacing={4}>
      <Grid item container xs={12} md={6} alignItems={"center"}>
        <Box
          data-aos={isMd ? "fade-right" : "fade-up"}
          paddingLeft={isMd && 2}
          p={1}
        >
          <Box marginBottom={2}>
            <Typography variant="h3" color="text.primary">
              One Stop Music Solutions <br />
              Mixing, Mastering{" "}
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" color="text.primary">
              Artists all over the world often face immense difficulties while
              trying to scale up their career, facing numerous challenges and
              riddles with very less to no guidance or support. Here at Manu
              Sounds, we aspire to provide you with the best solutions in terms
              of production, composition, marketing, pitching etc . Our team has
              people of immense expertise and experience from around the globe
              which will help and guide you to achieve your dreams at a very
              nominal and affordable cost.
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth={isMd ? false : true}
            >
              Lets go
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={6}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {console.log("here",image1)}
        <Box
          height={1}
          width={1}
          alt="..."
          boxShadow={3}
          borderRadius={2}
          maxWidth={600}
          blur={700}
          sx={{
            filter: theme.palette.mode === "dark" ? "brightness(0.7)" : "none",
          }}
        >
        <Image src={image1} duration={0} fit="cover"/>
        </Box>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
};
export default Hero;
