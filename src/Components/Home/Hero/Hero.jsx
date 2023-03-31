import React from "react";
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Hero = () => {
    const theme = useTheme();
    const isMd =  useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });
    return (
        <Grid container spacing = {4}>
            <Grid item container xs={12} md={6} alignItems = {'center'}>
                <Box data-aos = { isMd ? 'fade-right' : 'fade-up' } paddingLeft = { isMd && 2} p = {1}>
                    <Box marginBottom = {2}>
                        <Typography variant='h3' color='text.primary' >
                            One Stop Music Solutions {' '} <br/>
                            Mixing, Mastering{' '}
                        </Typography>
                    </Box>
                    <Box marginBottom = {3}>
                        <Typography variant="h6" color="text.primary">
                        Artists all over the world often face immense difficulties while trying to scale up their career, facing numerous challenges and riddles with very less to no guidance or support. Here at Manu Sounds, we aspire to provide you with the best solutions in terms of production, composition, marketing, pitching etc . Our team has people of immense expertise and experience from around the globe which will help and guide you to achieve your dreams at a very nominal and affordable cost.
                        </Typography>
                    </Box>
                    <Box>
                        <Button variant="contained" color="primary" size ="large" fullWidth={isMd ? false : true}>
                            Lets go
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}
export default Hero;