import React, {useCallback, useState, useEffect} from 'react';
import {
    Box,
    makeStyles,
    Grid,
    TextField,
    Card,
    CardContent,
    Button,
    Typography,
    Collapse,
    LinearProgress
} from "@material-ui/core";
import {useHistory, Link} from "react-router-dom";
import * as authActions from '../state/actions/auth';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '60%',
        },
        [theme.breakpoints.up('md')]: {
            width: '30%'
        }
    }
}));

function Login ({ error, login, loading, token }) {
    const classes = useStyles(),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        history = useHistory();

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (loading) return;
        login(email, password);
    }, [email, password, loading]);

    useEffect(() => {
        if (token) history.replace('/');
    }, [token]);

    return <form className={classes.root} onSubmit={handleSubmit}>
        <Card>
            { loading && <LinearProgress/> }
            { !loading && <Box height={'4px'}/> }
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant={'h4'} align={'center'}>
                            Inicia sesión
                        </Typography>
                        <Box pb={2} />
                    </Grid>
                    <Grid item xs={12}>
                        <Collapse in={Boolean(error)}>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'} color={'#d93025'}>
                                <Box pr={1} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
                                    <svg aria-hidden="true" className="stUf5b qpSchb" fill="currentColor"
                                         focusable="false" width="16px" height="16px" viewBox="0 0 24 24"
                                         xmlns="https://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                                        />
                                    </svg>
                                </Box>
                                <Typography variant={'body2'}>
                                    {error}
                                </Typography>
                            </Box>
                        </Collapse>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            placeholder={'Correo electrónico'}
                            type={'email'}
                            variant={'outlined'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            placeholder={'Contraseña'}
                            type={'password'}
                            variant={'outlined'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            variant={'contained'}
                            color={'primary'}
                            disableElevation
                            type={'submit'}
                            disabled={loading}
                        >
                            Inicia sesión
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to={'/signup'}>
                            <Typography align={'center'}>
                                registrate a cucabox
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </form>
}

const mapStateToProps = ({ authReducer }) => {
    return {
        ...authReducer
    }
}

const mapDispatchToProps = { ...authActions };

export default connect(mapStateToProps, mapDispatchToProps)(Login);