import React, {useEffect, useState} from 'react';
import {Container, Box, Backdrop, CircularProgress} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import * as authActions from '../state/actions/auth';
import {useHistory} from "react-router-dom";

function HomeView () {
    return <Container>
        <Box>
            hola
        </Box>
    </Container>
}

export default HomeView;