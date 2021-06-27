import React from 'react';
import {Container, Grid, Box, Typography, makeStyles, useTheme, useMediaQuery} from "@material-ui/core";
import Login from "../components/Login";
import * as authActions from '../state/actions/auth';

const useStyles = makeStyles((theme) => ({
    logo: {
        width: '90px',
        height: '90px'
    }
}));

export default function Home () {
    const classes = useStyles(),
        theme = useTheme(),
        isSm = useMediaQuery(theme.breakpoints.up('sm'));

    return <Container>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box
                    p={isSm ? 5 : 2}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    flexWrap={'wrap'}
                    flexDirection={isSm ? 'row' : 'column-reverse'}
                >
                    <Box pr={isSm ? 3 : 0}>
                        <Typography variant={'h1'}>
                            CucaBox
                        </Typography>
                    </Box>
                    <img className={classes.logo} src={'/icon.png'} alt={'website logo'}/>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} minHeight={'50vh'}>
                    <Login />
                </Box>
            </Grid>
        </Grid>
    </Container>;
}